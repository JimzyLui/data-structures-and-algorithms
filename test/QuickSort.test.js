const QuickSort = require("../sorting/QuickSort.js");

//console.log("QuickSort", QuickSort);

if ([1, 2, 4, 5, 8].join("") == QuickSort([5, 4, 8, 1, 2]).join("")) {
  console.log("SUCCESS!");
} else {
  console.log("FAIL!", QuickSort([5, 4, 8, 1, 2]));
  // console.log([1, 2, 4, 5, 8].join(""));
  // console.log(QuickSort([5, 4, 8, 1, 2]).join(""));
}
