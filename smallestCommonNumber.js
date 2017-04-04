// Given three integer arrays sorted in ascending order, find the smallest number that is common in all three arrays.


var smallestCommon = function(a1, a2, a3) {

  var curr1 = 0;
  var curr2 = 0;
  var curr3 = 0;

  while (curr1 < a1.length && curr2 < a2.length && curr3 < a3.length) {

    if (a1[curr1] === a2[curr2] && a2[curr2] === a3[curr3]) {
      return a1[curr1];
    }

    if (a1[curr1] <= a2[curr2] && a1[curr1] <= a3[curr3]) {
      curr1++;
    } else if (a2[curr2] <= a1[curr1] && a2[curr2] <= a3[curr3]) {
      curr2++;
    } else if (a3[curr3] <= a1[curr1] && a3[curr3] <= a2[curr2]) {
      curr3++;
    }
  }

  return -1;
}
