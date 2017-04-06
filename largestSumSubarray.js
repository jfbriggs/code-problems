// Given an array, find the contiguous subarray with the largest sum.

/*
Logic:

- create two variables: currentMax & globalMax, both set to first element in array
- iterate through array starting at second element
  - if currentMax is negative, then replace it with current element
  - otherwise, add current element to currentMax

  - compare globalMax to currentMax: if currentMax is greater, set globalMax to what it is
*/

var largestSumSubarray = function(array) {
  var currentMaxSum = array[0], globalMaxSum = array[0];
  var currentMaxIndices = [0, 0], globalMaxIndices = [0, 0];

  for (var i = 1; i < array.length; i++) {
    if (currentMaxSum < 0) {
      currentMaxSum = array[i];
      currentMaxIndices = [i, i];
    } else {
      currentMaxSum += array[i];
      currentMaxIndices[1] = i;
    }

    if (globalMaxSum < currentMaxSum) {
      globalMaxSum = currentMaxSum;
      globalMaxIndices[0] = currentMaxIndices[0];
      globalMaxIndices[1] = currentMaxIndices[1];
    }
  }

  return globalMaxIndices;
};
