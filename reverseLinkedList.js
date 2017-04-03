// Given the pointer/reference to the head of a singly linked list,
// reverse it and return the pointer/reference to the head of reversed linked list.

/*
LOGIC:

- Iterate (while loop)
- Keep track of previous node, current node, and next node

*/

var Node = function(value) {
  this.value = value;
  this.next = null;
}

var reverseLinkedList = function(head) {

  var previous = null, current = head, next = head.next;

  while (current !== null) {
    current.next = previous;
    previous = current;
    current = next;
    if (next) {
      next = current.next;
    }
  }

  return previous;
}