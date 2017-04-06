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


var mergeSort = function(array) {
  // empty array to hold series of single-element arrays
  var elementsAsArrays = [];
  // iterate through input array, pushing each element as a single-element array to the above container array
  array.forEach(function(element) {
    elementsAsArrays.push([element]);
  });

  // inner function to merge two arrays together in sorted order
  var merge = function(arr) {
    // BASE CASE: if the length of the passed in collection is 1, just return that first element
    if (arr.length === 1) {
      return arr[0];
    }
    // create an empty array to contain merged subarrays
    var allMergedArrays = [];
    // iterate through series of subarrays, iterating by 2 each time
    for (var i = 0; i < arr.length; i += 2) {
      // if current subarray is the last element in containing array
      if (i === arr.length - 1) {
        // just add it to above merged subarray container
        allMergedArrays.push(arr[i]);
      } else { // otherwise...
        // empty array to contain elements added in sorted order
        var mergedArrayPair = [];
        // create iterator variable for the first subarray (set to 0)
        // create iterator variable for the second subarray (set to 0)
        // create variables to simplify representation of the two subarrays we're working with
        var j = 0, k = 0, first = arr[i], second = arr[i + 1];
        // iteration:  while first iterator variable value is less than first subarray length and second iterator var is less than second subarray length
        while (j < first.length || k < second.length) {
          // if the current element in second subarray doesn't exist OR if current element in first subarray is less than current element in second
          if (k === second.length || first[j] < second[k]) {
            // add the current element in first subarray to above container array
            mergedArrayPair.push(first[j]);
            // increment first iterator
            j++;
          // if the current element in first subarray doesn't exist or if current element in second subarray is less than current element in first
          } else if (j === first.length || second[k] < first[j]) {
            // add the current element in second subarray to above container array
            mergedArrayPair.push(second[k]);
            // increment second iterator
            k++;
          }
        }
        // once done with combining of two subarrays, add result merged array to merged array container
        allMergedArrays.push(mergedArrayPair);
      }
    }

    // once iterating through original set of subarrays is complete, re-run inner function on new collection of subarrays
    return merge(allMergedArrays);
  }

  // invoke our inner function for first time (with a return)
  return merge(elementsAsArrays);
}

var arr = [3, 10, 2, 1, 5, 6, 4, 9, 7, 11, 21, 8];
console.log(mergeSort(arr));
