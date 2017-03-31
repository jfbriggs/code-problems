// Search a given number in a sorted array that has been rotated by some arbitrary number
// Return -1 if the number does not exist.

/*
Logic:
- ** BINARY SEARCH**
- establish a midpoint
- check if target is greater than or less than the midpoint
  - if greater, check if target is greater than rightmost point
    - if greater than rightmost point, target is in the left half
    - if less than rightmost point, target is in the right half
  - if less, check if target is less than leftmost point
    - if less than the leftmost point, target is in the right half
    - if greater than the leftmost point, taret is in the left half

- change our pointers accordingly and re-run
*/

var searchRotatedArray = function(array, target) {
  var left = 0, right = array.length - 1;
  var midIndex;

  var checkSegment = function() {
    midIndex = Math.ceil((left + right) / 2);

    if (array[midIndex] === target) {
      return midIndex;
    }

    if (left === right) {
      return -1;
    }

    if ((target > array[midIndex] && target < array[right]) || (target < array[midIndex] && target < array[left])) {
      left = midIndex + 1;
    } else {
      right = midIndex - 1;
    }

    return checkSegment();
  }

  return checkSegment();
}
