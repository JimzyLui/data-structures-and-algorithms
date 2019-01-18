const BubbleSort = require("../sorting/BubbleSort.js");

//console.log("BubbleSort", BubbleSort);

if ([1, 2, 4, 5, 8].join("") == BubbleSort([5, 4, 8, 1, 2]).join("")) {
  console.log("SUCCESS!");
} else {
  console.log("FAIL!", BubbleSort([5, 4, 8, 1, 2]));
  console.log([1, 2, 4, 5, 8].join(""));
  console.log(BubbleSort([5, 4, 8, 1, 2]).join(""));
}
