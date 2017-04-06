// Using merge sort, sort an array in ascending order.

/*
Logic:
-Two parts:
  1) Split array down to series of single-element arrays
  2) Merge arrays back together in pairs, creating arrays in sorted order

- Split:

  - Pick a midpoint
  - Divide array into two subarrays at that midpoint
  - re-run the split on the two subarrays
  - once a subarray is one element in length, stop

- Merge:
  - Take a pair of subarrays
  - Create a new subarray by iterating through the two subarrays, selecting lower of the "next element" from the two
  - Do this for every pair
  - Re-run process again on merged arrays
*/

var merge = function(left, right) {
  // create an empty result array
  var result = [];
  // while left and right still have elements
  while (left.length > 0 && right.length > 0) {
    // if first element in left is less than the first element in right
    if (left[0] <= right[0]) {
      // remove the first element from left and add it to the result array
      result.push(left.shift());
    } else { // otherwise (if first in right is less than first element in left)
      // remove first element from right and add it to result array
      result.push(right.shift());
    }
  }

  while (left.length > 0) {
    result.push(left.shift());
  }

  while (right.length > 0) {
    result.push(right.shift());
  }

  // output the result array
  return result;
}

var mergeSort = function(array) {
  console.log(array);
  // BASE CASE: if array has just one element in it, just return it
  if (array.length === 1) {
    return array;
  }
  // create a midpoint variable
  var midpoint = Math.floor(array.length / 2);
  // create a left half array based on midpoint
  var left = array.slice(0, midpoint);
  // create a right half array based on midpoint
  var right = array.slice(midpoint, array.length)
  // invoke merge, passing in an invocation of mergeSort on left and an invocation of mergeSort on right (with a return)
  return merge(mergeSort(left), mergeSort(right));

}

var arr = [3, 10, 2, 1, 5, 6, 4, 9, 7, 11, 21, 8];
console.log(mergeSort(arr));
