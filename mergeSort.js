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
  // create a result array
  var result = [];
  // iterator for a1
  // iterator for a2
  var i = 0, j = 0;

  // while a1 and a2 both still have elements left
  while (i < a1.length && j < a2.length) {
    // if the current element in a1 is less than or equal to the current element in a2
    if (a1[i] <= a2[j]) {
      // add the current element in a1 to the result array
      result.push(a1[i]);
      // increment a1's iterator
      i++;
    } else { // otherwise
      // add the current element in a2 to the result array
      result.push(a2[j]);
      // increment a2's iterator
      j++;
    }
  }

  // while a1 still has elements left
  while (i < a1.length) {
    // add the current element in a1 to the result array
    result.push(a1[i]);
    // increment a1's iterator
    i++;  
  }

  // while a2 still has elements left
  while (j < a2.length) {
    // add the current element in a2 to the result array
    result.push(a2[j]);
    // increment a2's iterator    
    j++;
  }

  // output the result array
  return result;
}

var mergeSort = function(array) {
  // if the array has just one element in it
  if (array.length === 1) {
    // just output the array
    return array;
  }

  // create midpoint variable
  var midpoint = Math.floor(array.length / 2);
  // create a copy of subarray from start to midpoint
  var a1 = array.slice(0, midpoint);
  // create a copy of subarray from midpoint to end
  var a2 = array.slice(midpoint, array.length);
  // invoke merge, passing in the invocation of mergeSort on each subarray (with a return)
  return merge(mergeSort(a1), mergeSort(a2));

}
