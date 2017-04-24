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

*/

var quicksort = function(array) {

  var orgByPivot = function(left, right) {
    console.log(left, right);
    // BASE CASE: if left and right are the same value
    if (left >= right) {
      // break out
      return;
    }

    // set pivot to what right is
    var pivot = right;
    // set right to right - 1
    right = right - 1;
    // set originalRight to what pivot is
    // set originalLeft to what left is
    var origRight = pivot, origLeft = left;

    // while left and right are not the same value
    while (left !== right) {
      
      // if value at left is less than or equal to value at pivot
      if (array[left] <= array[pivot]) {
        // increment left
        left++;
      } else {  // otherwise (if value at left is greater than value at pivot)
        // if value at right is greater than value at pivot
        if (array[right] > array[pivot]) {
          // decrement right
          right--;
        } else { // otherwise
          // swap values at left and right
          var temp = array[left];
          array[left] = array[right];
          array[right] = temp;          
        }
      }

    }

    console.log(array);
    console.log(left, right);

    // if value at convergence point is greater than pivot element
    if (array[left] > array[pivot]) {
      // swap them
      var temp = array[left];
      array[left] = array[pivot];
      array[pivot] = temp;      
      // re-invoke inner function on subarray to left of convergence index
      orgByPivot(origLeft, left - 1);
      // re-invoke inner function on subarray to right of convergence index
      orgByPivot(left + 1, origRight);
    } else {
      orgByPivot(origLeft, pivot - 1);
    }


  }

  orgByPivot(0, array.length - 1);
  
  return array;
}
