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
  for (var i = 0; i < array.length; i++) {
    var current = array[i];
    for (var j = i - 1; j >= 0; j--) {
      if (array[j] > current) {
        array[j + 1] = array[j];
        if (j === 0) {
          array[0] = current;
          break;
        }  
      } else {
        array[j + 1] = current;
        break;
      }
    }
  }

  return array;
}
