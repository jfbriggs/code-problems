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

- Iterative solution:
  - Replace inner function with while loop
    - ending condition: current level array is empty

*/

var levelOrderTraversal = function(root) {
  var result = [];

  var currentLevel = [root];
  var nextLevel = [];

  while (currentLevel.length > 0) {
    var levelValues = [];

    currentLevel.forEach(function(node) {
      node.children.forEach(function(child) {
        nextLevel.push(child);
      });
      levelValues.push(node.value);
    });

    result.push(levelValues);
    currentLevel = nextLevel;
    nextLevel = [];
  }

  return result;
};

var Tree = function(val) {
  this.value = val;
  this.children = [];
};

Tree.prototype.addChild = function(node) {
  this.children.push(node);
};
