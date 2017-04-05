// Use a breadth-first search to find whether a given value exists in a tree.  Return a boolean.

/*
Logic:

- create current level, next level arrays (current level set to contain root, next level empty)
- create a loop to iterate through levels
- within loop:
  - iterate through the current level
  - if the current element in this loop is the target, just return true
  - otherwise, iterate through its children, pushing them to the next level array
  - if no element in current level is the target:
    - set current level to what next level is
    - then set next level to empty

- if we make it past all the iteration, return false
*/

var breadthFirstSearch = function(root, target) {
  
  // create current level array with root in it
  var currentLevel = [root];
  // create empty next level array
  var nextLevel = [];
  // begin our primary iteration (while)
  while (currentLevel.length > 0) {
    // iterate through current level
    for (var i = 0; i < currentLevel.length; i++) {
      // if the current node's value is the target
      if (currentLevel[i].value === target) {
        // return true
        return true;
      }
      // if not, iterate through its children, adding them to next level array
      currentLevel[i].children.forEach(function(child) {
        nextLevel.push(child);
      });
    }

    // set current level array to what next level array is
    currentLevel = nextLevel;
    // set next level array to empty
    nextLevel = [];
  }

  // if we make it all the way through, just output false
  return false;

}

var Tree = function(val) {
  this.value = val;
  this.children = [];
};

Tree.prototype.addChild = function(node) {
  this.children.push(node);
}

var a = new Tree(1);
var b = new Tree(3);
var c = new Tree(4);
var d = new Tree(2);
var e = new Tree(7);
var f = new Tree(5);
var g = new Tree(9);
a.addChild(b);
a.addChild(c);
b.addChild(d);
b.addChild(e);
c.addChild(f);
c.addChild(g);
console.log(breadthFirstSearch(a, 11));