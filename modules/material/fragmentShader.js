const getStaticLines = () => {
  let lines = "";

  const offsets = [-12, -8, -4, 0, 4, 8, 12];
  for (let i = 0; i < offsets.length; i++) {
    lines += `float pct${i} = plot(vUv, sw * ${offsets[i]}., sw);`;
    lines += `fCol = (1.0-pct${i})*fCol+pct${i}*col${i % 2 ? 1 : 2};`;
  }
  return lines;
};

const fragmentShader = /*glsl*/ `
  #define LINEAR_TO_SRGB(c) pow((c), vec3(1.0 / 2.2))

  varying float vDistort;
  varying vec2 vUv;      
  varying vec2 vUvB;      

  uniform vec3 u_col1;
  uniform vec3 u_col2;
  uniform vec3 u_col3;
  uniform vec3 u_col4;
  uniform vec3 u_bg1;
  uniform vec3 u_bg2;
  uniform float u_time;
  uniform float u_time_stripes;
  uniform float u_intensity;
  uniform float u_cellSize;
  uniform float u_chessTop;
  uniform float u_chessBottom;
  uniform float u_grainTop;
  uniform float u_grainBottom;
  uniform float u_strokeWidth;
  uniform float u_textureId;
  uniform float u_stripes;
  uniform bool u_vertical;

  #define PI 3.1415926535

  vec2 rotateCoord(vec2 uv, float rads) {
    uv *= mat2(cos(rads), sin(rads), -sin(rads), cos(rads));
    return uv;
  }

  float plot(vec2 st, float thresholdX, float strokeW) {    
    return step( abs(st.y - .4 - st.x + thresholdX), strokeW);
  }

  float random2d(vec2 coord){
    return fract(sin(dot(coord.xy, vec2(12.9898, 78.233))) * 43758.5453);
  }

  vec3 addNoise(vec3 col) {
    float amount = 0.17;
    float noise = (random2d(vUvB) - 0.5) * amount;
    return vec3(col.x + noise, col.y + noise, col.z+noise);
  }

  vec3 pal(in float t,in vec3 a,in vec3 b,in vec3 c,in vec3 d){
      return a+b*cos(6.28318*(c*t+d));
  }

  float triangular(float x){
      return abs((x-2.*floor(x/2.))-1.);
  }

  float dentada(float x){
      return fract(-x);
  }

  float rampa(float x){
      return fract(x);
  }

  float cuadrada(float x){
      return step(.5,fract(x));
  }
  void main() {
    float strokeW = u_strokeWidth;
    float h = 0.33;
    float distort = vDistort * u_intensity;
    float mixInterpolation = step(h*2.0, vUv.y);
    vec2 center = -1.0 + 2.0 * vUvB;
    vec2 uv = floor(center.xy * u_cellSize);
    float stripesDirection = vUv.y;
    if(u_vertical) {
      stripesDirection = vUvB.x;
    }

        
    vec3 wh = vec3(0.0);
    vec3 bl = vec3(1.0);
    vec3 wh_ns = addNoise(vec3(0.0));
    vec3 bl_ns = addNoise(vec3(1.0));    
    vec3 col1 = mix(mix(u_col1, u_col2, vUv.y/h), mix(u_col2, u_col3, (vUv.y - h)/(1.0 - h*2.)), step(h, vUv.y));  
    vec3 col2 = mix(mix(u_col3, u_col4, (vUv.y - h)/(1.0 - h*2.)), mix(u_col3, u_col4, (vUv.y - h*1.)/(1.0-h*2.)), mixInterpolation);
    vec3 col1_ns = addNoise(col1);
    vec3 col2_ns = addNoise(col2);
    vec3 bg1g = mix(u_bg1,col1,distort);
    vec3 bg2g = mix(u_bg2,col2,distort);  
    vec3 fCol = mix(col1,col2,distort);

    
    // TODO: LINE LOGIC
    // static lines
    if (u_textureId == 1.) {
      
      float sw = strokeW / 4.;
      ${getStaticLines()}
      
      float solidLine1 = plot(vUv, 0., sw);
      vec3 solidLineColor1 = solidLine1*u_col1;

      float solidLine2 = plot(vUv, 0.64, sw);
      vec3 solidLineColor2 = solidLine2*u_col2;

      float solidLine3 = plot(vUv, -0.34, sw);
      vec3 solidLineColor3 = solidLine3*u_col3;

      float solidLine4 = plot(vUv, .8, sw);
      vec3 solidLineColor4 = solidLine4*u_col4;
      
      float lineValues = solidLine1 + solidLine2 + solidLine3 + solidLine4;
      vec3 lineColors = solidLineColor1 + solidLineColor2 + solidLineColor3 + solidLineColor4;

      fCol = (1. - lineValues) * fCol + lineColors;
    }
    


    // CHESS
    if (u_textureId == 3.) {
      if (vUv.y < u_chessTop && vUv.y > u_chessBottom  ) {
        if(mod(uv.x + uv.y, 2.0) > 0.5){
          fCol = vec3(col1);
        }else if (mod(uv.x + uv.y, 2.0) < 0.5){
          fCol = vec3(col2);
        }
      }
    }
    
    // DROP
    if (u_textureId == 6.) {
      float lava=triangular(vUvB.x*2.)*
      dentada(vUvB.y * 10.) *
      sin(1.-triangular(u_time*.1))*
      triangular(
          sin(vUvB.y*triangular(u_time*.1)*10.)
      );
      fCol=pal(lava, bg1g,col2,col1,col2);
    }


    // GRAIN
    if (vUv.y > u_grainTop || vUv.y < u_grainBottom) {
      fCol = addNoise(fCol);
    }

    // DYNAMIC LINES
    if (u_textureId == 2.) {
      float vel = 5.;
      float faseHorizontal = u_time_stripes * vel;
      float frecuencia = u_stripes;
      float relacion = (sin(stripesDirection * PI * frecuencia + faseHorizontal) + 1.)/2.;
      fCol = mix(fCol, col1, step(relacion, vUv.y ));
    }

    // STRIPED CHESS
    if (u_textureId == 4.) {
      float vel = 5.;
      float faseHorizontal = u_time_stripes * vel;
      float frecuencia = u_stripes;
      
      float relacion = (sin(stripesDirection  * PI * frecuencia + faseHorizontal) + 1.)/2.;

      if (vUv.y < u_chessTop && vUv.y > u_chessBottom  ) {
        if(mod(uv.x + uv.y, 2.0) > 0.5){
          fCol = mix(fCol, vec3(col1), step(relacion, vUv.y ));
        }else if (mod(uv.x + uv.y, 2.0) < 0.5){
          fCol = mix(fCol, vec3(col2), step(relacion, vUv.y ));
        }
      }
    }

   
    // TODO: CHESS LOGIC
    
    gl_FragColor = vec4(LINEAR_TO_SRGB(fCol), 1.0);
  }  
`;

export default fragmentShader;
