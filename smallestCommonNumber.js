// Given three integer arrays sorted in ascending order, find the smallest number that is common in all three arrays.


var smallestCommon = function(a1, a2, a3) {
  var arrays = Array.prototype.slice.call(arguments);

  arrays.sort(function(a, b) {
    return a.length - b.length;
  });

  // create a variable to represent the shortest array
  var first = arrays[0];
  // create a variable (object) that is key-value pairs of elements in second array
  var second = arrays[1].reduce(function(obj, element) {
    obj[element] = element;
    return obj;
  }, {});
  // create a variable (object) that is key value pairs of elements in third array
  var third = arrays[2].reduce(function(obj, element) {
    obj[element] = element;
    return obj;
  }, {});

  // variable to represent lowest common number (starts at null)
  var lowestCommon = null;
  // iterate through first array
  for (var i = 0; i < first.length; i++) {
    // if the lowest common num value is null OR if the current element is less than the current lowest common num value
    if (lowestCommon === null || first[i] < lowestCommon) {
      // if the current value exists in second
      if (second[first[i]]) {
        // if the current value exists in third
        if (third[first[i]]) {
          // set lowestCommon to the current element
          lowestCommon = first[i];
        }
      }
    }
  }
  // output the lowest common num value at the end
  return lowestCommon;

}


console.log(smallestCommon([3, 1, 8, 9, 2, 3, 1, 4, 7], [4, 0, 9, 2], [10, 15, 3, 1, 9, 4]));



