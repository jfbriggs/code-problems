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
  var result = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length > 0) {
    result.push(left.shift());
  }

  while (right.length > 0) {
    result.push(right.shift());
  }

  return result;
}

var mergeSort = function(array) {
  if (array.length === 1) {
    return array;
  }

  var midpoint = Math.floor(array.length / 2);
  var left = array.slice(0, midpoint);
  var right = array.slice(midpoint, array.length)
  return merge(mergeSort(left), mergeSort(right));

}
