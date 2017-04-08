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
  // iterate forward through array, starting at index 1
  for (var i = 0; i < array.length; i++) {
    // create variable to represent the value of current element
    var current = array[i];
    // iterate backward, starting at current index - 1
    for (var j = i - 1; j >= 0; j--) {
      // if current backward iteration element is greater than current forward iteration element
      if (array[j] > current) {
        // make element at next index (compared to where we are in backward iteration) the current backward iteration element value
        array[j + 1] = array[j];
        // if current index in backward iteration is 0
        if (j === 0) {
          // make the first element in the array the current forward iteration element
          array[0] = current;
          // and break out of iteration
          break;
        }  
      } else { // otherwise
        // make element at next index (compared to where we are in backward iteration) the current forward iteration element value
        array[j + 1] = current;
        // and break out of iteration
        break;
      }
    }
  }

  // output the array in its sorted form
  return array;
}
