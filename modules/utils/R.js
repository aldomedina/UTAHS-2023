const R = {
  random_choice: (array) => array[Math.floor(Math.random() * array.length)],
  random_int: (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  random_num: (min, max) => Math.random() * (max - min) + min,
};

export default R;
