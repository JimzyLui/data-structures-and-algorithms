const BubbleSort = arr => {
  // sort using bubblesort

  let bChanged;
  do {
    bChanged = false;
    arr.forEach((x, index, arr) => {
      //compare each set of items and switch places between them if the first one is lower
      console.log(x, index, arr);
      if (index < arr.length - 1) {
        if (x > arr[index + 1]) {
          bChanged = true;
          //switch places via destructuring
          [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
        }
      }
    });
  } while (bChanged);
  return arr;
};

module.exports = BubbleSort;
