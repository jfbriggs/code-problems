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
  var first, second;
  var length = 1;
  var stepsRemaining = n;
  var newHead;

  while (stepsRemaining > 0) {
    first = node, second = node;
    while (first.next !== null) {
      first = first.next;
      length++;
      if (stepsRemaining === 0) {
        second = second.next;
      } else {
        stepsRemaining--;
      }
    }

    if (stepsRemaining > 0) {
      var minSteps = stepsRemaining % length - 1;
      stepsRemaining = minSteps;      
    }
  }

  first.next = node;
  newHead = second.next;
  second.next = null;
  return newHead;
};

var Node = function(value) {
  this.value = value;
  this.next = null;
}

Node.prototype.pointTo = function(node) {
  this.next = node;
}
