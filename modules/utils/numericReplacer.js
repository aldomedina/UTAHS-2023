export default function numericReplacer(key, value) {
  if (typeof value === "number") {
    return parseFloat(value);
  } else if (typeof value === "object") {
    // Si el valor es un objeto, aplicar la función de reemplazo a sus propiedades
    for (const prop in value) {
      if (value.hasOwnProperty(prop)) {
        value[prop] = numericReplacer(prop, value[prop]);
      }
    }
  }
  console.log(value);
  return value;
}
