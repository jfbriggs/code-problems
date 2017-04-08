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
  var endIndex = array.length - 1;
  var swapsInPrior = true;

  while (endIndex > 0 && swapsInPrior === true) {
    swapsInPrior = false;

    for (var i = 0; i <= endIndex; i++) {
      if (array[i] > array[i + 1]) {
        var temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapsInPrior = true;
      }
    }

    endIndex--;
  }

  return array;
}
