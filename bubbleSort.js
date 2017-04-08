// Given an unordered array, sort it using bubble sort.

/*
Logic:

- iterate forward starting at first element in the array
- if the current element in iteration is greater than the next element in the array
  - swap them
- once we get to the end, repeat the process again, ending at prior index to the last index in the prior iteration

ENDING CONDITIONS:
- if an entire iteration occurs where there are no swaps, just output the array is is
- otherwise, once the ending index is the first index, output the array
*/

var bubbleSort = function(array) {
  // variable to represent end index (set to last index in array off the bat)
  var endIndex = array.length - 1;
  // variable to represent whether any swaps happened in the prior iteration (set to true off the bat)
  var swapsInPrior = true;
  // while above end index variable is greater than 0 and the swaps variable is true
  while (endIndex > 0 && swapsInPrior === true) {
    // set swaps variable to false
    swapsInPrior = false;
    // iterate forward through array starting at first element (ending at "end index")
    for (var i = 0; i <= endIndex; i++) {
      // if current element is greater than next element
      if (array[i] > array[i + 1]) {
        // swap them
        var temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        // set swaps variable to true
        swapsInPrior = true;
      }
    }
    // decrement "end index" variable
    endIndex--;
  }
  // output the array
  return array;
}
