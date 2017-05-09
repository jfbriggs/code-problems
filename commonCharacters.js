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
  var result = '';
  var s2Characters = {};
  var commonChars = {};

  for (var i = 0; i < s2.length; i++) {
    s2Characters[s2[i]] = true;
  }

  for (var j = 0; j < s1.length; j++) {
    if (s2Characters[s1[j]]) {
      commonChars[s1[j]] = true;
    }
  }

  for (var k = 0; k < s1.length; k++) {
    if (commonChars[s1[k]]) {
      result += s1[k];
      commonChars[s1[k]] = false;
    }
  }

  return result;
};
