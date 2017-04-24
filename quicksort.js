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

var quickSort = function(array) {

  var partialSort = function(left, right) {
    if (left >= right) {
      return;
    }

    var pivot = right;
    right = right - 1;
    var origRight = pivot, origLeft = left;

    while (left !== right) {
      if (array[left] <= array[pivot]) {
        left++;
      } else {
        if (array[right] > array[pivot]) {
          right--;
        } else {
          var temp = array[left];
          array[left] = array[right];
          array[right] = temp;          
        }
      }
    }

    if (array[left] > array[pivot]) {
      var temp = array[left];
      array[left] = array[pivot];
      array[pivot] = temp;      
      partialSort(origLeft, left - 1);
      partialSort(left + 1, origRight);
    } else {
      partialSort(origLeft, pivot - 1);
    }

  }

  partialSort(0, array.length - 1);
  
  return array;
}
