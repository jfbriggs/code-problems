// Given three integer arrays sorted in ascending order, find the smallest number that is common in all three arrays.


var smallestCommon = function(a1, a2, a3) {
  var arrays = Array.prototype.slice.call(arguments);

  arrays.sort(function(a, b) {
    return a.length - b.length;
  });

  // variable to represent lowest common number (starts at null)
  var lowestCommon = null;
  // iterate through first array
  for (var i = 0; i < arrays[0].length; i++) {
    // if the lowest common num value is null OR if the current element is less than the current lowest common num value
    if (lowestCommon === null || arrays[0][i] < lowestCommon) {
      // iterate through second array
      for (var j = 0; j < arrays[1].length; j++) {
        // if current element in second array is the same as the current element in first array
        if (arrays[1][j] === arrays[0][i]) {
          // iterate through third array
          for (var k = 0; k < arrays[2].length; k++) {
            // if current element in third array is the same as current in second
            if (arrays[2][k] === arrays[1][j]) {
              // set the lowest common num value to the current value in third
              lowestCommon = arrays[2][k];
              // break out of third loop
              break;
            }
          }
          // break out of second loop
          break;
        }
      }
    }
  }
  // output the lowest common num value at the end
  return lowestCommon;

}


console.log(smallestCommon([3, 1, 8, 9, 2, 3, 1, 4, 7], [4, 0, 9, 2], [10, 15, 3, 1, 9, 4]));



