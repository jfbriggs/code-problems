/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  var results = [];

  var createCombo = function(choices, currentCombo) {
    if (currentCombo.length === string.length) {
      results.push(currentCombo);
    }

    for (var i = 0; i < choices.length; i++) {
      createCombo(choices.slice(0, i) + choices.slice(i + 1), currentCombo + choices[i]);
    }
  }

  createCombo(string, '');
  return results;

};
