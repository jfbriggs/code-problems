/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */

 /*
LOGIC:
-  iterate through the string
-  create an object that keeps counts of each letter

-  iterate through counts object
  - each iteration, add current key/value pair as a subarray to front of resulting array
  - bubblesort style, iterate forward with new pair, swapping as necessary, until it's in place

 */

var characterFrequency = function(string) {
  var frequencies = {};
  var frequencyList = [];

  for (var i = 0; i < string.length; i++) {
    var current = string[i];

    if (!frequencies[current]) {
      frequencies[current] = 1;
    } else {
      frequencies[current]++;      
    }
  }

  for (char in frequencies) {
    frequencyList.unshift([char, frequencies[char]]);
    frequencyList = sortForward(frequencyList);
  }

  return frequencyList;
};

var sortForward = function(freqs) {
  if (freqs.length > 1) {
    var newIndex = 0;

    while (freqs[newIndex][1] > freqs[newIndex + 1][1] || (freqs[newIndex][1] === freqs[newIndex + 1][1] && freqs[newIndex][0].charCodeAt(0) > freqs[newIndex + 1][0].charCodeAt(0))) {
      var temp = freqs[newIndex];
      freqs[newIndex] = freqs[newIndex + 1];
      freqs[newIndex + 1] = temp;
      newIndex++;    
    }
  }

  return freqs;
}
