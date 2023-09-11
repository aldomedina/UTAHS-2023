const types = [
  {
    id: 1,
    lid: true,
    name: "minus 3",
    period: 1,
    ranges: [
      [25, 25],
      [1, 15],
      [3, 4],
      [0, 0],
      [0, 0],
      [0.3, 0.5],
      [1.6, 1.6],
      [1.4, 1.4],
      [1.5, 1.5],
    ],
    cam: [
      [40, 43.5, 21, 1, -1, -0.5, 3],
      [-39, 34, 25, 0.5, -1, -1, 3],
      [-43, 31, -24, -0.2, -1, 0.6, 3],
      [38, 38, -23, 1, -1, 1, 2],
      [52, 2, -0.2, 0.9, -0.4, -0.1, 1],
      [52, -14, -0.2, 1.3, 1.9, 0, 2],
      [46, 36, 0.4, 3, 1, 0, 2],
      [47, -22, 25, 2, 1, 0.2, 3],
    ],
  },
  {
    id: 2,
    lid: true,
    name: "minus 2",
    period: 1,
    ranges: [
      [10, 10],
      [0.4, 8],
      [2, 5],
      [0, 0],
      [0, 0],
      [2, 2],
      [3.4, 3.4],
      [1, 1],
      [2.4, 2.74],
    ],
    cam: [
      [190, 126, -63.5, 1, -1.6, 0, 2],
      [190, 122.5, 53, 1, -1.7, -0.25, 2],
      [200, 111, -4.5, 1, -1.5, 0, 3],
      [222, -107, 2, 2.5, 3.5, -0.2, 2],
      [210, -111.5, -63, 2.5, 3.5, -0.2, 2],
      [207, -112.5, 72, 2.7, 4, 0, 1],
    ],
  },
  {
    id: 3,
    lid: true,
    name: "minus 2 2",
    period: 1,
    ranges: [
      [20, 20],
      [0, 1.5],
      [2, 3],
      [0, 0],
      [0, 0],
      [2.5, 2.5],
      [3.4, 3.4],
      [1.6, 3.5],
      [3.3, 3.3],
    ],
    cam: [
      [104, 78.5, 38, 1, -1.3, 1, 3],
      [112, 74.4, 1.6, 0.7, -1.5, 0, 3],
      [98, 87, -50.6, 0.3, -0.7, -0.5, 3],
      [-118, 62.5, 3, -1, -0.2, 0, 2],
      [-99.3, 70, -55, -1, 0, 0, 2],
    ],
  },
  {
    id: 4,
    lid: true,
    name: "minus 4",
    period: 10,
    ranges: [
      [40, 40],
      [0.7, 7],
      [2, 2],
      [0, 0],
      [0, 0],
      [1, 2.23],
      [3, 3],
      [0.7, 1],
      [3, 3],
    ],
    cam: [
      [54.5, 42, 19.5, 1.8, -7.9, -0.8, 3],
      [55, 42, -20.3, 2.4, -7.7, 1, 3],
      [63, 37.5, -1.3, 2.2, -7.6, -1.2, 3],
      [-55, 41.2, 4.3, 1.8, -8, 0.2, 2],
      [-49.7, 44, -20.2, 0.5, -8, 1, 2],
      [-49, 45.3, 20.5, -0.2, -8, -1, 2],
      [50.2, -46.2, -25.5, 3.2, 7.6, 0, 0.5],
    ],
  },
  {
    id: 5,
    lid: true,
    name: "doodle 3",
    period: 10,
    animated: true,
    speed: 0.2,
    ranges: [
      [35, 35],
      [0, 1.44],
      [3, 3],
      [1.93, 1.93],
      [3.7, 3.7],
      [0.5, 0.5],
      [1.3, 1.3],
      [1.6, 1.6],
      [1, 1],
    ],
    cam: [
      [-26, -27.4, -17.2, -2.5, 1.6, -0.7, 2],
      [-14, -39, 14.5, -1, 1.6, 0, 3],
      [21.5, 37, -18, 0, -0.6, 0.5, 1],
    ],
  },
  {
    id: 6,
    lid: false,
    name: "doodle spin",
    period: 10,
    animated: true,
    speed: 0.3,
    ranges: [
      [28, 28],
      [0.46, 3],
      [1, 1],
      [3, 7.49],
      [1.6, 1.6],
      [0.78, 0.78],
      [1.9, 1.9],
      [1.1, 1.1],
      [1, 1],
    ],
    cam: [
      [32, -22, -9, 3.5, -0.13, -1, 3],
      [31.6, -21.9, 9, 3.4, 0, 0.5, 2],
      [39.5, -33.6, -18, 4.4, 1.5, -0.13, 1],
      [-40.6, 20, 5, 2, -3, 0, 1],
      [39.4, 38, 14.6, 4.8, 1, 0, 2],
      [-29, 13.3, -7, 1, -2, 1.4, 1],
    ],
  },
  {
    id: 7,
    lid: false,
    name: "discos",
    period: 1,
    ranges: [
      [12, 12],
      [0.11, 0.5],
      [18, 28],
      [0.22, 0.222],
      [30, 30],
      [0.1, 0.1],
      [1.4, 1.4],
      [1.4, 1.4],
      [1.7, 1.7],
    ],
    cam: [
      [-10, -102.5, 171.6, -1, -0.6, -0.28, 2],
      [-14, -127.5, 142, -1, -1.6, 0.1, 1],
    ],
    animated: true,
    speed: 0.02,
  },
  {
    id: 8,
    lid: true,
    name: "chascona",
    period: 1,
    ranges: [
      [35, 35],
      [0.4, 10],
      [12, 15],
      [0, 0],
      [5.3, 5.3],
      [0.5, 1],
      [1, 1],
      [1, 1],
      [1, 1],
    ],
    cam: [
      [33, 13, -0.4, 0, -1.2, -0.2, 1],
      [-34, -19.5, -0.3, -0.4, 1.5, 0, 2],
    ],
  },
  {
    id: 9,
    lid: true,
    name: "la verde",
    period: 10,
    ranges: [
      [17, 17],
      [3, 20],
      [3, 10],
      [0, 0],
      [0, 0],
      [0, 1.35],
      [1.5, 1.5],
      [1.2, 1.2],
      [1.5, 1.5],
    ],
    cam: [
      [-70, 64.5, 54, -0.9, -0.9, 0, 3],
      [-81, 63.4, -50, -0.9, -0.9, -0.12, 2],
      [-59, 84, 51, -0.5, -1, 0.2, 1],
    ],
  },
  {
    id: 10,
    lid: true,
    name: "Fried Teapot",
    period: 10,
    animated: true,
    speed: 0.17,
    ranges: [
      [30, 30],
      [0.2, 6],
      [2, 2],
      [0, 0],
      [0, 0],
      [2.21, 2.21],
      [3.4, 3.4],
      [1.4, 1.4],
      [3.3, 3.3],
    ],
    cam: [
      [71, 56.7, 23.8, 4.7, -1.6, 0.7, 3],
      [71.9, 68.5, -33, 4.8, -2.4, -0.7, 3],
      [87, 40, 1.5, 3.8, -0.9, -0.7, 2],
      [-68.9, 48.8, -31.5, 1, -2.8, 0.7, 2],
      [-84, 51.7, 36.7, 1.4, -2.7, 1, 3],
    ],
  },
  {
    id: 11,
    lid: true,
    name: "Fried Teapot 2",
    period: 10,
    ranges: [
      [26, 26],
      [0.24, 3],
      [1.75, 1.75],
      [0, 0],
      [13.4, 13.4],
      [2.92, 2.92],
      [3.5, 3.4],
      [1.2, 2.9],
      [3.3, 3.3],
    ],
    cam: [
      [80.7, 67, -42.4, 3.6, -2.3, -0.2, 2],
      [95, 60, 24.6, 4.3, -3, -0.2, 2],
      [-98, 48.2, 36, 1.5, -5.2, -3, 1],
      [-95, 56, -32, -1.2, -2.2, -0.5, 2],
    ],
  },
  {
    id: 12,
    lid: true,
    name: "choapino",
    period: 10,
    animated: true,
    speed: 0.007,
    ranges: [
      [29, 29],
      [30, 100],
      [1.2, 1.8],
      [0, 0],
      [0, 0],
      [3.2, 5],
      [2.1, 2.1],
      [1, 1],
      [2.3, 2.3],
    ],
    cam: [
      [-46, 42.5, 36.4, -0.4, 0.1, 0.3, 2],
      [-52.5, 39, -29.5, 0.4, 0.4, 0.4, 2],
      [53.5, 37, -30, 0.4, 0.4, 0.4, 3],
      [57, 37, -1.5, 0.5, 0.1, -0.15, 3],
    ],
  },
  {
    id: 13,
    lid: true,
    name: "chascona II",
    period: 10,
    ranges: [
      [30, 30],
      [2.4, 2.8],
      [6.4, 8.3],
      [0.05, 0.05],
      [5.3, 5.3],
      [0.2, 0.5],
      [1.3, 1.3],
      [1.8, 1.8],
      [2, 2],
    ],
    cam: [
      [-52.3, 6, -64, 1, 0.2, -0.8, 1],
      [33.5, -68.9, -18, 0.7, 0.6, -1.3, 3],
    ],
  },
  {
    id: 14,
    lid: false,
    name: "discos II",
    period: 1,
    ranges: [
      [11, 11],
      [0.11, 0.15],
      [18, 28],
      [0.43, 0.72],
      [7, 15],
      [0.1, 0.3],
      [1, 1],
      [1.5, 1.5],
      [1.1, 1.1],
    ],
    cam: [
      [-4.75, -106.3, -122, -1.14, 1.42, -0.1, 3],
      [10.7, -114, 113.7, 0, 1.35, -0.3, 1],
    ],
    animated: false,
    speed: 0.02,
  },
  {
    id: 15,
    lid: true,
    name: "voladora",
    period: 1,
    ranges: [
      [27, 27],
      [0, 1],
      [0, 0],
      [9, 16],
      [1, 1],
      [0, 0],
      [1, 1],
      [1, 1],
      [2, 2.8],
    ],
    cam: [
      [-18, 34, 50.3, 2, -2, 1.5, 3],
      [21, -39.3, 44, 0, 1.4, 2.8, 1],
    ],
  },
  {
    id: 16,
    lid: true,
    name: "base",
    period: 1,
    ranges: [
      [27, 27],
      [0, 0],
      [0, 0],
      [0, 0],
      [1, 1],
      [0, 0],
      [1, 1],
      [1, 1],
      [1, 1],
    ],
    cam: [[3, 4.6, 50.8, 0, 0, 0, 1]],
  },
];

export default types;
