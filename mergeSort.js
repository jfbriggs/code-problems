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

var merge = function(a1, a2) {
  var result = [];
  var i = 0, j = 0;

  while (i < a1.length && j < a2.length) {
    if (a1[i] <= a2[j]) {
      result.push(a1[i]);
      i++;
    } else {
      result.push(a2[j]);
      j++;
    }
  }

  while (i < a1.length) {
    result.push(a1[i]);
    i++;  
  }

  while (j < a2.length) {
    result.push(a2[j]);
    j++;
  }

  return result;
}

var mergeSort = function(array) {
  if (array.length === 1) {
    return array;
  }

  var midpoint = Math.floor(array.length / 2);
  var a1 = array.slice(0, midpoint);
  var a2 = array.slice(midpoint, array.length);
  return merge(mergeSort(a1), mergeSort(a2));
}
