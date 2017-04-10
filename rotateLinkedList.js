// Given head node of a singly linked list and an integer 'n', rotate linked list by 'n'.

/*

Logic:
- Two pointers
- Variable that represents the passed in rotation value (we'll count it down)
- store current head in a variable
- first pointer iterates through list until rotation value is 0
- then first pointer continues and second pointer starts at the first node, iterating forward as well
- once first pointer reaches the last node, current node of second pointer will be the new "last node" and it's "next" value will be the new head
- change old "last node" to point to original head
- output the new head

*/

var rotateLinkedList = function(node, n) {
  // variable to represent length of linkedlist
  var length = 1;
  // variable to represent steps remaining (relative to n, count down)
  var stepsRemaining = n;
  // variable to represent new head once iteration is finished
  var newHead;

  // while stepsRemaining is greater than 0
  while (stepsRemaining > 0) {
    // variables to represent first pointer & second pointer, both point to head node to start
    var first = node, second = node;
    // while the "next" value of the node that the first pointer references is not null
    while (first.next !== null) {
      // move first pointer to next node and increment length
      first = first.next;
      length++;
      // if countdown variable is 0, move second pointer to its next node too, otherwise decrement stepsRemaining
      if (stepsRemaining === 0) {
        second = second.next;
      } else {
        stepsRemaining--;
      }
    }

    // if we get to last node and stepsRemaining is still greater than 0
    if (stepsRemaining > 0) {
      // get the remainder of stepsRemaining divided by list length
      var minSteps = stepsRemaining % length - 1;
      // and set stepsRemaining to that value
      stepsRemaining = minSteps;      
    }
  }

  // once first pointer gets to the last node, change first pointer's "next" to point to original head node
  first.next = node;
  // set new head variable to second pointer's "next"
  newHead = second.next;
  // change second pointer's "next" to null
  second.next = null;
  // output the new head node
  return newHead;
};

var Node = function(value) {
  this.value = value;
  this.next = null;
}

Node.prototype.pointTo = function(node) {
  this.next = node;
}

var a = new Node(1);
var b = new Node(2);
var c = new Node(3);
var d = new Node(4);
var e = new Node(5);
var f = new Node(6);
var g = new Node(7);
var h = new Node(8);

a.pointTo(b);
b.pointTo(c);
c.pointTo(d);
d.pointTo(e);
e.pointTo(f);
f.pointTo(g);
g.pointTo(h);
