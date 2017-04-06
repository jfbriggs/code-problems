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
  // create currentMax & globalMax vars, set to first array element
  var currentMaxSum = array[0], globalMaxSum = array[0];
  var currentMaxIndices = [0, 0], globalMaxIndices = [0, 0];
  // iterate through array starting at second element
  for (var i = 1; i < array.length; i++) {
    // if currentMax value is negative
    if (currentMaxSum < 0) {
      // set currentMax to the current element in the loop
      currentMaxSum = array[i];
      currentMaxIndices = [i, i];
    } else { // otherwise
      // add the current element in the loop to currentMax
      currentMaxSum += array[i];
      currentMaxIndices[1] = i;
    }

    // if globalMax is less than currentMax, set globalMax to what currentMax is
    if (globalMaxSum < currentMaxSum) {
      globalMaxSum = currentMaxSum;
      globalMaxIndices[0] = currentMaxIndices[0];
      globalMaxIndices[1] = currentMaxIndices[1];
    }

    
  }

  // output globalMax
  return globalMaxIndices;
};

console.log(largestSumSubarray([-4, 2, -5, 1, 2, 3, 6, -5, 1]));