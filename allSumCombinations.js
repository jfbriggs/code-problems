// Given a positive integer, print all possible sum combinations using positive integers.

var allSumCombos = function(num) {
  var startingValue = 1;
  var lastValue;
  var result = [];

  var generateCombos = function(array) {
    if (startingValue > num / 2) {
      return;
    }

    if (array.length === 0) {
      array.push(startingValue);
      lastValue = num - startingValue;
      array.push(lastValue);
      result.push(array.slice());
      generateCombos(array);
    } else {
      var currentLast = array[array.length - 1];
      array[array.length - 1] = 1;
      array.push(currentLast - 1);

      if (array[array.length - 1] >= array[0]) {
        result.push(array.slice());
      }

      if (array[array.length - 1] === 1) {
        startingValue++;
        generateCombos([]);
      } else {
        generateCombos(array);
      }
      
    }

  }

  generateCombos([]);
  return result;
}
