// Given three integer arrays sorted in ascending order, find the smallest number that is common in all three arrays.


var smallestCommon = function(a1, a2, a3) {

  var first = a1;
  var second = objectConvert(a2);
  var third = objectConvert(a3);

  var lowestCommon = null;

  for (var i = 0; i < first.length; i++) {
    if (lowestCommon === null || first[i] < lowestCommon) {
      if (second[first[i]]) {
        if (third[first[i]]) {
          lowestCommon = first[i];
        }
      }
    }
  }

  return lowestCommon;
}

var objectConvert = function(array) {
  return array.reduce(function(obj, element) {
    obj[element] = element;
    return obj;
  }, {});
}
