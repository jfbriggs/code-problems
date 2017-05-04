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
  var openers = { "(": true, "{": true, "[": true };
  var openerEquivalents = { ")": "(", "}": "{", "]": "[" };
  var activeOpens = [];

  for (var i = 0; i < input.length; i++) {
    if (openers[input[i]]) {
      activeOpens.push(input[i]);
    } else if (openerEquivalents[input[i]]) {
      if (activeOpens.length === 0 || openerEquivalents[input[i]] !== activeOpens[activeOpens.length - 1]) {
        return false;    
      }
      activeOpens.pop();
    }    
  }

  return activeOpens.length > 0 ? false : true;
};
