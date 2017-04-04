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
  
  var partialSort = function(left, right) {

    if (left === right) {
      return;
    }

    var pivot = right;
    right = right - 1;

    var originalLeft = left, originalRight = right;

    while (left !== right) {
      if (array[left] <= array[pivot]) {
        left++;
      } else {
        while (array[right] > array[pivot] && right > left) {
          right++;
        }
        if (left === right) {
          break;
        } else {
          var temp = array[right];
          array[right] = array[left];
          array[left] = temp;
        } 
      }
    }

    if (array[left] > array[pivot]) {
      var temp = array[left];
      array[left] = array[pivot];
      array[pivot] = temp;
      partialSort(originalLeft, left - 1);
      partialSort(left + 1, originalRight);
    } else {
      partialSort(originalLeft, originalRight);
    }
  }

  partialSort(0, array.length - 1);

  return array;
}
