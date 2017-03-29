// Given a sorted array of integers, return the index of the given key. Return -1 if not found.

// e.g. [1, 2, 5, 7, 9, 11, 20, 38, 44, 51, 59, 80], 44 ==> 8

// Step 1: find the midpoint
// Step 2: determine whether target value is greater than or less than the midpoint
// Step 3: if target value is less than, recursively re-run binary search on values to the left (if greater, to the right)
// Step 4: Keep repeating until midpoint lands on target value

var binarySearch = function(array, target, left, right) {
  // create a left pointer
  // create a right pointer
  // set a midpoint index variable
  left = left || 0;
  right = right || array.length - 1;
  var midIndex = Math.floor((left + right) / 2);

  // BASE CASE: if the midpoint value is the target
  if (array[midIndex] === target) {
    // return the midpoint index variable
    return midIndex;
  }

  // BASE CASE 2: if left and right are the same index and not the target value, the target doesn't exist
  if (left === right) {
    return -1;
  }

  // if the target value is less than the midpoint value
  if (target < array[midIndex]) {
    // set right to midpoint - 1
    right = midIndex - 1;
  } else {  // otherwise (if it's greater)
    // set left to the current midpoint index + 1
    left = midIndex + 1;
  }

  // then re-run binarySearch (with a return)
  return binarySearch(array, target, left, right);

}

console.log(binarySearch([1, 2, 5, 7, 9, 11, 20, 38, 44, 51, 59, 80], 5));