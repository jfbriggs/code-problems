// Given the root node of a binary tree, swap the 'left' and 'right' children for each node.

/*
Logic:
- inner function
- inner function swaps left and right children
  - then, inner-function is re-invoked on each child
- recursion breaks when a node has less than two children

- once recursion finishes altogether, output the original root node

*/

var mirrorNodes = function(root) {
  // inner function to swap a node's children
  var swapChildren = function(node) {
    // BASE CASE: if node's left is null AND node's right is null
    if (!node.left && !node.right) {
      // break out;
      return;
    }

    // temp variable to represent left (or null)
    var temp = node.left;
    // set left equal to what right is (or null)
    node.left = node.right;
    // set right equal to what temp is
    node.right = temp;
    // re-invoke this function on left
    if (node.left) {
      swapChildren(node.left);
    }

    // re-invoke this function on right
    if (node.right) {
      swapChildren(node.right);
    }
  }


  // invoke function first time
  swapChildren(root);

  return root;
}

var Tree = function(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

Tree.prototype.addLeft = function(node) {
  this.left = node;
}

Tree.prototype.addRight = function(node) {
  this.right = node;
}

var a = new Tree(1);
var b = new Tree(2);
var c = new Tree(3);
var d = new Tree(4);
var e = new Tree(5);
var f = new Tree(6);
var g = new Tree(7);
var h = new Tree(8);

a.addLeft(b);
a.addRight(c);
b.addLeft(d);
b.addRight(e);
c.addLeft(f);
c.addRight(g);
d.addRight(h);
