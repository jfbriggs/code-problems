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
  // variables to represent open and closed, both start at 0
  var open = 0, closed = 0;
  // iterate through input string
  for (var i = 0; i < input.length; i++) {
    // if current character is "("
    if (input[i] === "(") {
      // increment open
      open++;
    } else if (input[i] === ")") { // or if current character is ")"
      // increment closed
      closed++;
      // if closed is greater than open
      if (closed > open) {
        // output false
        return false;
      }     
    }
  }

  // once iteration is complete, if closed and open are not the same value, return false.  otherwise, return true
  return closed === open ? true : false;

};

console.log(balancedParens('('));  // false
console.log(balancedParens('()')); // true
console.log(balancedParens(')('));  // false
console.log(balancedParens('(())'));  // true