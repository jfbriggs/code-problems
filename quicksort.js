// Given an integer array, sort it in ascending order using quicksort.

/*
LOGIC:

- DIVIDE & CONQUER:

- Select pivot point (always pick rightmost value)
- left pointer starts at array start
- right pointer starts at array end
- iterate pointers in, starting with left until a number greater than pivot is found
   - then right, until a value less than or equal to the pivot is found
   - then swap the two
   - then continue

- then repeat process for segment to left of pivot's new location
- and for segment to the right of pivot's new location

*/

var quicksort = function(array) {
  
  // inner function to iterate and partially sort (takes in left and right values)
  var partialSort = function(left, right) {
    // BASE CASE: if left and right are the same index
    if (left === right) {
      // break out
      return;
    }
    // set pivot index to right
    var pivot = right;
    // set right to 1 less than right
    right = right - 1;
    // set original left, original right values
    var originalLeft = left, originalRight = right;
    // while left and right are not the same index
    while (left !== right) {
      // if left's value is less than or equal to the pivot value
      if (array[left] <= array[pivot]) {
        // just increment left
        left++;
      } else { // otherwise (if left's value is greater than the pivot value)
        // while right's value is greater than the pivot value and the right pointer index is greater than the left pointer index
        while (array[right] > array[pivot] && right > left) {
          // decrement right
          right++;
        }
        // if left and right are the same
        if (left === right) {
          // just break out of the iteration
          break;
        } else { // otherwise
          // swap the value at left with the value at right
          var temp = array[right];
          array[right] = array[left];
          array[left] = temp;
        } 
      }
    }

    // if the value at the converged index is greater than the pivot value
    if (array[left] > array[pivot]) {
      // swap them 
      var temp = array[left];
      array[left] = array[pivot];
      array[pivot] = temp;
      // re-run the inner function on subarray from original left to converged index - 1
      partialSort(originalLeft, left - 1);
      // re-run inner function on subarray from converged index + 1 to original right
      partialSort(left + 1, originalRight);
    } else { // otherwise
      // re-run inner function on subarray from original left to original right
      partialSort(originalLeft, originalRight);
    }
  }

  // invoke inner function for first time
  partialSort(0, array.length - 1);

  return array;
}
