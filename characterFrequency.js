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

-  iterate through counts object and push each key/value pair to an array
-  iterate through the array, sorting by frequency values
-  iterate through once more, swapping greater letters forward if frequencies are the same

 */

var characterFrequency = function(string) {
  // object to collect frequency values
  var frequencies = {};
  // result array
  var frequencyList = [];
  // iterate through string
  for (var i = 0; i < string.length; i++) {
    var current = string[i];
    // each iteration, if the current character does not exist in frequencies object yet
    if (!frequencies[current]) {
      // create it and set it to 1
      frequencies[current] = 1;
    } else { // otherwise, if it does already exist
      // increment it
      frequencies[current]++;      
    }
  }

  // iterate through frequencies object
  for (char in frequencies) {
    // each iteration, add key/value pair as a subarray to front of result array
    frequencyList.unshift([char, frequencies[char]]);
    // run sortForward on result as it now is
    frequencyList = sortForward(frequencyList);
  }

  // output result array
  return frequencyList;
};

var sortForward = function(freqs) {
  if (freqs.length > 1) {
    // variable to represent the first (new) pair (index value)
    var newIndex = 0;
    // while the new pair's second element is greater than the next pair's second element OR the new pair and next pair's frequencies are the same but the new pair's letter is greater
    while (freqs[newIndex][1] > freqs[newIndex + 1][1] || (freqs[newIndex][1] === freqs[newIndex + 1][1] && freqs[newIndex][0].charCodeAt(0) > freqs[newIndex + 1][0].charCodeAt(0))) {
      // swap the current pair with its next pair
      var temp = freqs[newIndex];
      freqs[newIndex] = freqs[newIndex + 1];
      freqs[newIndex + 1] = temp;
      // increment newIndex
      newIndex++;    
    }
  }

  // output freqs
  return freqs;
}

console.log(characterFrequency('wapslwgiidwpappwkdhguwowga'));
console.log(sortForward([['g', 7], ['b', 2], ['c', 4], ['f', 7], ['d', 9]]));