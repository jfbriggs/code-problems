// Given a positive integer, print all possible sum combinations using positive integers.

var allSumCombos = function(num) {
  // variable to represent current starting value (default: 1)
  var startingValue = 1;
  // variable to represent current last value (not immediately defined)
  var lastValue;
  // results array
  var result = [];
  // inner function (accepts an array as argument)
  var generateCombos = function(array) {
    // BASE CASE: if current starting value is greater than half of num
    if (startingValue > num / 2) {
      // break out of recursion
      return;
    }

    // if passed in array is empty
    if (array.length === 0) {
      // add starting value to it
      array.push(startingValue);
      // set "last value" to num - starting value
      lastValue = num - startingValue;
      // add last value to array
      array.push(lastValue);
      // add this array to results array
      result.push(array.slice());
      // re-invoke inner function, passing in this current array
      generateCombos(array);
    } else { // otherwise (if passed in array is NOT empty)
      // variable to represent last value in passed in array
      var currentLast = array[array.length - 1];
      // set last value in passed in array to 1
      array[array.length - 1] = 1;
      // and add prior last value - 1 to end of array
      array.push(currentLast - 1);
      // if new last value in array is NOT less than first value in array
      if (array[array.length - 1] >= array[0]) {
        // add this new array to results
        result.push(array.slice());
      }
      // if new last value in array is 1
      if (array[array.length - 1] === 1) {
        // increment current starting value
        startingValue++;
        // re-invoke inner function, passing in an empty array again
        generateCombos([]);
      } else {
        generateCombos(array);
      }
      
    }

  }

  // invoke inner function for first time (pass in empty array)
  generateCombos([]);
  // output results array
  return result;
}
