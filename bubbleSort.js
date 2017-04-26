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
  // variable to represent whether any swaps happened in the prior iteration (true by default)
  var swapped = true;

  var iterate = function(lastIndex) {
    // BASE CASE: if swapped variable is false, or last Index is 0
    if (!swapped || lastIndex === 0) {
      // break out
      return;
    }

    // set swapped variable to false
    swapped = false;
    // iterate forward through array
    for (var i = 0; i < lastIndex; i++) {
      // if current element in iteration is greater than the next element
      if (array[i] > array[i + 1]) {
        // swap them
        var temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        // set swapped variable to true
        swapped = true;
      }

    }

    // re-invoke iterate function with lastIndex being 1 less than it currently is
    iterate(lastIndex - 1);
  }

  // invoke iterate for first time
  iterate(array.length - 1);

  // output the array
  return array;

}
