const QuickSort = arr => {
  // sort using QuickSort
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr.pop();
  let arrLeft = [];
  let arrRight = [];
  arr.forEach(x => {
    if (x > pivot) {
      arrRight.push(x);
    } else {
      arrLeft.push(x);
    }
  });
  arrLeft = QuickSort(arrLeft);
  arrRight = QuickSort(arrRight);
  return arrLeft.concat(pivot, arrRight);
};

module.exports = QuickSort;
