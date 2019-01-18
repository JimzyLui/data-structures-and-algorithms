const QuickSort = arr => {
  // sort using QuickSort
  if (arr.length === 0) {
    return;
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
  return [].concat(arrLeft, pivot, arrRight);
};

module.exports = QuickSort;
