/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

 /* BASIC SOLUTION LOGIC:

- iterate through string
- if an open or closed parenthese is found, increment open or closed variable
  - if closed is greater than open, immediately return false
- once iteration is complete, if closed and open are not the same value, return false, otherwise return true
*/


var balancedParens = function(input) {
  // object to represent just opening bracket types
  var openers = { "(": true, "{": true, "[": true };
  // object to represent equivalent openers for closing bracket types
  var openerEquivalents = { ")": "(", "}": "{", "]": "[" };
  // array to represent active opening brackets
  var activeOpens = [];
  // iterate through input string
  for (var i = 0; i < input.length; i++) {
    // if the current character is some type of opening bracket
    if (openers[input[i]]) {
      // add it to the active opening brackets array
      activeOpens.push(input[i]);
    } else if (openerEquivalents[input[i]]) { // Or, if the current character exists as a key in the opener/closer object
      // if the associated value is the same as the last element in the current active opening brackets array
      if (activeOpens.length === 0 || openerEquivalents[input[i]] !== activeOpens[activeOpens.length - 1]) {
        // immediately output false
        return false;    
      }
      // otherwise, remove the last element in the current active opening brackets array
      activeOpens.pop();
    }    
  }

  // if the active opening brackets array still has something in it, output false.  otherwise, true.
  return activeOpens.length > 0 ? false : true;

};

console.log(balancedParens('[](){}'));  // true
console.log(balancedParens('[({})]')); // true
console.log(balancedParens('[(]{)}'));  // false
console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false