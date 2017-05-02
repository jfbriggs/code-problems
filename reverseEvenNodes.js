// Given a singly linked list, reverse nodes at even indices.

/*
Logic:

- Iterate fully through list once to get length
- establish positions to swap, starting at n +/- 1 (then 3, 5....) (will stop once this # becomes > half of length)
- Iterate from head node, holding on to prev, curr, next for node
   - Keep iterating and do the same for nth-from-last node
   - Then swap

- Keep up process until beyond half of length, then return head node

*/

var reverseEvenNodes = function(head) {
  // variable to represent list length (starts at 1)
  var listLength = 1;
  // variable to represent current node (starts as passed-in head)
  var lengthCurrent = head;
  // while current's next is not null
  while (lengthCurrent.next) {
    // increment list length
    listLength++;
    // set current node to current's next
    lengthCurrent = lengthCurrent.next;
  }

  // inner function to swap two nodes (accepts a first node [k from beginning] and a second node [k from end])
  var swapNodes = function(first, second) {
    // BASE CASE: if first node's position is greater than half of list's length
    if (first > listLength / 2) {
      // break out
      return;
    }

    // variable to represent current node's position (starts at 1)
    var currentPosition = 1;
    // variables to represent current node (starts at head), previous node, next node (starts as head's next)
    var current = head, previous = null;
    // variables to represent firstPrev, firstCurr, firstNext
    var firstPrev, firstCurr, firstNext;
    // variables to represent secondPrev, secondCurr, secondNext
    var secondPrev, secondCurr, secondNext;
    // while current node's next is not null
    while (current.next) {
      // if current node's position is first node wanted
      if (currentPosition === first) {
        // set firstPrev to what previous is, firstCurr to what current is, and firstNext to what next is
        firstPrev = previous;
        firstCurr = current;
        firstNext = current.next;
      } else if (currentPosition === second) { // otherwise, if current node's position is the second node wanted,
        // set secondPrev to what previous is, secondCurr to what current is, and secondNext to what next is
        secondPrev = previous;
        secondCurr = current;
        secondNext = current.next;
        // and break out of the loop
        break;
      }
      // set previous to what current is, current to what next is, and next to what next's next is
      previous = current;
      current = current.next;
      next = current.next;
      // increment current node position value
      currentPosition++;
    }
    // once out of the loop swap firstCurr and secondCurr
    firstPrev.next = secondCurr;
    secondPrev.next = firstCurr;
    secondCurr.next = firstNext;
    firstCurr.next = secondNext;

    // re-invoke swapNodes on next pair of positions
    swapNodes(first + 2, second - 2);
    
  }

    // invoke inner function for the first time, passing in 2 and length (even even) or length - 1 (if odd)
    if (listLength % 2 === 0) {
      swapNodes(2, listLength);
    } else {
      swapNodes(2, listLength - 1);
    }

  // output the original head node
  return head;
};

var Node = function(val) {
  this.value = val;
  this.next = null;
};

var a = new Node('a');
var b = new Node('b');
a.next = b;
var c = new Node('c');
b.next = c;
var d = new Node('d');
var e = new Node('e');
var f = new Node('f');
var g = new Node('g');
var h = new Node('h');
var i = new Node('i');
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;
h.next = i;

console.log(JSON.stringify(reverseEvenNodes(a)));