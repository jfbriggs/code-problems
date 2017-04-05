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
  var nodes = [root];
  var i = 0;

  while (i < nodes.length) {
    if (nodes[i].value === target) {
      return true;
    }

    nodes[i].children.forEach(function(child) {
      nodes.push(child);
    });

    i++;
  }

  return false;
}

var Tree = function(val) {
  this.value = val;
  this.children = [];
};

Tree.prototype.addChild = function(node) {
  this.children.push(node);
}
