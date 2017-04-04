// Given three integer arrays sorted in ascending order, find the smallest number that is common in all three arrays.


var smallestCommon = function(a1, a2, a3) {

  var lowestCommon = null;
  
  // variables to represent current positions in each array
  var curr1 = 0;
  var curr2 = 0;
  var curr3 = 0;

  // while iterators are within bounds of the arrays
  while (curr1 < a1.length && curr2 < a2.length && curr3 < a3.length) {
    // if the three current values are equal to each other
    if (a1[curr1] === a2[curr2] && a2[curr2] === a3[curr3]) {
      // return that value
      return a1[curr1];
    }

    // if the current value in a1 is less than or equal to the current values of a2 and a3
    if (a1[curr1] <= a2[curr2] && a1[curr1] <= a3[curr3]) {
      // increment curr1
      curr1++;
    // if the current value in a2 is less than or equal to current values of a1 and a3
    } else if (a2[curr2] <= a1[curr1] && a2[curr2] <= a3[curr3]) {
      // increment curr2
      curr2++;
    // if the current value in a3 is less than or equal to current values in a1 and a2
    } else if (a3[curr3] <= a1[curr1] && a3[curr3] <= a2[curr2]) {
      // increment curr3
      curr3++;
    }
  }

  return -1;
}

console.log(smallestCommon([1, 2, 3, 4, 7, 8, 9], [0, 2, 4, 9], [1, 3, 4, 9, 10, 15]));
