// Given an unsorted array, sort it in ascending order using a heap sort.

/*
Logic:

3 Parts: overall heapsort function, heapify function, build max heap function

Heapify: compares an element to its children, determines the greatest value, swaps it with a child if necessary (and re-runs at new location if swapped)

Build Max Heap: iterates backward from array.length/2 (rounded down) running heapify on each element

Heapsort: Runs build max heap once, then iterates downward from last index; swapping last element with root, then run heapify on new first element

*/

var heapify = function(array, i, last) {
  var max = i;
  var first = i * 2 + 1, second = i * 2 + 2;

  if (first <= last && array[first] > array[max]) {
    max = first;
  }

  if (second <= last && array[second] > array[max]) {
    max = second;
  }

  if (max !== i) {
    var temp = array[i];
    array[i] = array[max];
    array[max] = temp;

    heapify(array, max, last);
  } else {
    return array;
  }

}

var buildMaxHeap = function(array) {
  for (var i = Math.floor(array.length / 2); i >= 0; i--) {
    heapify(array, i, array.length - 1);
  }

  return array;
}

var heapSort = function(array) {
  array = buildMaxHeap(array);

  for (var i = array.length - 1; i > 0; i--) {
    var temp = array[0];
    array[0] = array[i];
    array[i] = temp;

    heapify(array, 0, i - 1);
  }

  return array;
}
