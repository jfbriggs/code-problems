// Given three integer arrays sorted in ascending order, find the smallest number that is common in all three arrays.


var smallestCommon = function(a1, a2, a3) {

  var lowestCommon = null;
  
  // variables to represent current positions in each array
  var curr1 = 0;
  var curr2 = 0;
  var curr3 = 0;

  var matchValue = a1[0];

  // inner function to increment arrays (takes in a value to try and match)
  var findMatch = function() {
    // while current value in array 1 is less than value to match
    while (a1[curr1] < matchValue) {
      // increment curr1
      curr1++;
      // if the new current value doesn't exist (i.e. index greater than last index in array, return -1)
      if (curr1 >= a1.length) {
        return -1;
      }
      // if the current value in array1 is now greater than matchValue, set matchValue to it
      if (a1[curr1] > matchValue) {
        matchValue = a1[curr1];
      }
    }

    while (a2[curr2] < matchValue) {
      // increment curr1
      curr2++;
      // if the new current value doesn't exist (i.e. index greater than last index in array, return -1)
      if (curr2 >= a2.length) {
        return -1;
      }
      // if the current value in array1 is now greater than matchValue, set matchValue to it
      if (a2[curr2] > matchValue) {
        matchValue = a2[curr2];
      }
    }

    while (a3[curr3] < matchValue) {
      // increment curr1
      curr3++;
      // if the new current value doesn't exist (i.e. index greater than last index in array, return -1)
      if (curr3 >= a3.length) {
        return -1;
      }
      // if the current value in array1 is now greater than matchValue, set matchValue to it
      if (a3[curr3] > matchValue) {
        matchValue = a3[curr3];
      }
    }

    // if the three current values are the same, return that value
    if (a1[curr1] === a2[curr2] && a2[curr2] === a3[curr3]) {
      return a1[curr1];
    } else {
      // otherwise, reinvoke inner function
      return findMatch();
    }
    
  }

  // invoke inner function first time with a return
  return findMatch();
}

console.log(smallestCommon([1, 2, 3, 4, 7, 8, 9], [0, 2, 4, 9], [1, 3, 4, 9, 10, 15]));
