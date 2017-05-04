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
  // create results array
  var results = [];

  // create inner function to select a character and add to a combo (accept a string, and an existing combo string)
  var createCombo = function(choices, currentCombo) {
    // BASE CASE:  if combo string is same length as original string
    if (currentCombo.length === string.length) {
      // add the combo string to results array
      results.push(currentCombo);
    }

    // iterate through choices string
    for (var i = 0; i < choices.length; i++) {
      // invoke createCombo, passing in combo with current letter cut out, and existing combo + current letter
      createCombo(choices.slice(0, i) + choices.slice(i + 1), currentCombo + choices[i]);
    }
  }

  // invoke inner function for the first time
  createCombo(string, '');
  // output the results array
  return results;

};

console.log(allAnagrams('abc'));