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
  
  // create nodex array with root in it
  var nodes = [root];
  // create an iterator value
  var i = 0;

  // begin our primary iteration (while)
  while (i < nodes.length) {
    // if the value of the current node (according to the iterator) in our nodes array is the target
    if (nodes[i].value === target) {
      // output true and end
      return true;
    }
    // iterate through current node's children
    nodes[i].children.forEach(function(child) {
      // add each one to nodes array
      nodes.push(child);
    });

    // increment iterator
    i++;
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
console.log(breadthFirstSearch(a, 9));