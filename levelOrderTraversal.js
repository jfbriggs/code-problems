// Given root of a binary tree, display node values at each level.  Represent levels as subarrays within an outer array.

/*
Logic:

- Create 2 arrays: one to represent current level, one to represent next level
- Add root node to current level

(Repeatable steps)
- Iterate through current level array, adding each node's children to the next level array
- Once iteration through current level array is done, push it to result array, then set current level array to what next level array is
  - then set next level array back to empty


- Base case: if current level array is empty at start of a new invocation
  - output the result
*/

var levelOrderTraversal = function(root) {
  // create an ultimate result array
  var result = [];
  // create current level (set to have one element: root) and next level (empty) arrays
  var currentLevel = [root];
  var nextLevel = [];
  // inner function
  while (currentLevel.length > 0) {
    var levelValues = [];

    // iterate through current level array
    currentLevel.forEach(function(node) {
      // for each element, iterate through its children
      node.children.forEach(function(child) {
        // push each child to "next level" array
        nextLevel.push(child);
      });
      levelValues.push(node.value);
    });

    // push current level array to the result array
    result.push(levelValues);
    // set current level array to what next level array is
    currentLevel = nextLevel;
    // set next level array to empty
    nextLevel = [];
  }

  // output result array
  return result;
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
console.log(levelOrderTraversal(a));