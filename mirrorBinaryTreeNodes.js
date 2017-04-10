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
  var swapChildren = function(node) {
    if (!node.left && !node.right) {
      return;
    }

    var temp = node.left;
    node.left = node.right;
    node.right = temp;

    if (node.left) {
      swapChildren(node.left);
    }

    if (node.right) {
      swapChildren(node.right);
    }
  }

  swapChildren(root);

  return root;
}
