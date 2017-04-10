// Implement a method to print all permutations of a given string.

/*
Logic:
- RECURSION

- within inner function:
  - iterate through string
  - select current letter and add to a resulting string
  - re-invoke function, passing in current combination and a substring (which is current letter swapped with first letter, then cut at second index)

*/

var permuteString = function(string) {
  var result = [];

  var createCombo = function(options, combo) {
    combo = combo || '';

    if (combo.length === string.length) {
      result.push(combo);
      return;
    }

    for (var i = 0; i < options.length; i++) {
      var select = options[i];
      newCombo = combo + select;
      createCombo(createSubstring(options, i), newCombo);
    }
  }

  createCombo(string);

  return result;
}

var replaceAt = function(string, index, char) {
  return string.substring(0, index) + char + string.substring(index + 1, string.length);
}

var createSubstring = function(string, index) {
  if (index !== 0) {
    var temp = string[0];
    string = replaceAt(string, 0, string[index]);
    string = replaceAt(string, index, temp);
  }
  return string.substring(1, string.length);
}
