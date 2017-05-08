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

- sort resulting array: descending by frequency, then ascending by letter if necessary

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
    frequencyList.push([char, frequencies[char]]);
  }

  frequencyList.sort(function(a, b) {
    if (a[1] > b[1]) {
      return -1;
    }
    if (a[1] < b[1]) {
      return 1;
    }
    if (a[0] < b[0]) {
      return -1;
    }
    if (a[0] > b[0]) {
      return 1;
    }
  });

  return frequencyList;
};
