// Given an unordered array, sort it using insertion sort.

/*
Logic:

- iterate forward through array
- for each element in our forward iteration
  - iterate backward
  - compare current element in forward iteration to current element in backward iteration
  - if the element in backward iteration is greater
    - shift that element over one index to the right
  - once we reach a point where current element in forward iteration is greater than current element in backward iteration, insert the forward iteration element
*/

var insertionSort = function(array) {
  // variable to represent current element's value
  var current;

  // iterate forward through the array starting at second element
  for (var i = 1; i < array.length; i++) {
    current = array[i];
    // iterate backward through array, starting at current (first it) element
    for (var j = i - 1; j >= 0; j--) {
      // if current (second it) element is greater than the stored value
      if (array[j] > current) {
        // shift the current element forward one index
        array[j + 1] = array[j];
        // then, if the current index is 0
        if (j === 0) {
          // set the current index to current
          array[j] = current;
        }
      } else { // otherwise
        // insert the stored value at the following (forward) index
        array[j + 1] = current;
        // break out of inner loop
        break;        
      }
    }
  }

  // output the array
  return array;

}

var arr = [11, 9, 1, 5, 3, 12, 8, 4, 15, 2];
console.log(insertionSort(arr));