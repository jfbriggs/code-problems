// Given a sorted array of integers, return the index of the given key. Return -1 if not found.

// e.g. [1, 2, 5, 7, 9, 11, 20, 38, 44, 51, 59, 80], 44 ==> 8

// Step 1: find the midpoint
// Step 2: determine whether target value is greater than or less than the midpoint
// Step 3: if target value is less than, recursively re-run binary search on values to the left (if greater, to the right)
// Step 4: Keep repeating until midpoint lands on target value

var binarySearch = function(array, target, left, right) {
  left = left || 0;
  right = right || array.length - 1;
  var midIndex = Math.floor((left + right) / 2);

  if (array[midIndex] === target) {
    return midIndex;
  }

  if (left === right) {
    return -1;
  }

  if (target < array[midIndex]) {
    right = midIndex - 1;
  } else {
    left = midIndex + 1;
  }

  return binarySearch(array, target, left, right);
}