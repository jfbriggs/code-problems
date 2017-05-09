/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

var commonCharacters = function(s1, s2) {
  // result string variable
  var result = '';
  // object that will become key value representation of characters in string 2
  var s2Characters = {};
  // object that will represent characters common between the two strings
  var commonChars = {};

  // iterate through string 2
  for (var i = 0; i < s2.length; i++) {
    // create a key with value true for that character
    s2Characters[s2[i]] = true;
  }

  // iterate through string 1
  for (var j = 0; j < s1.length; j++) {
    // if the current character exists as a key in s2Characters
    if (s2Characters[s1[j]]) {
      // add that character as a key with value true to commonChars
      commonChars[s1[j]] = true;
    }
  }

  // iterate through string 1 one more time
  for (var k = 0; k < s1.length; k++) {
    // if the current character exists in commonChars with a truthy value
    if (commonChars[s1[k]]) {
      // add that character to the result string
      result += s1[k];
      // and set its value in commonChars to false so it wont be recognized again (prevents duplicates)
      commonChars[s1[k]] = false;
    }
  }

  return result;
};

console.log(commonCharacters('acexivou', 'aegihobu')); // 'aeiou'