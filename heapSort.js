// Given an unsorted array, sort it in ascending order using a heap sort.

/*
Logic:

3 Parts: overall heapsort function, heapify function, build max heap function

Heapify: compares an element to its children, determines the greatest value, swaps it with a child if necessary (and re-runs at new location if swapped)

Build Max Heap: iterates backward from array.length/2 (rounded down) running heapify on each element

Heapsort: Runs build max heap once, then iterates downward from last index; swapping last element with root, then run heapify on new first element

*/

var heapify = function(array, i, n) {
  var left = 2 * i + 1, right = 2 * i + 2;
  var max;

  if (left <= n && array[left] > array[i]) {
    max = left;
  } else {
    max = i;
  }

  if (right <= n && array[right] > array[max]) {
    max = right;
  }

  if (max !== i) {
    var temp = array[i];
    array[i] = array[max];
    array[max] = temp;
    heapify(array, max, n);
  }
};

var buildMaxHeap = function(array) {
  for (var i = Math.floor(array.length / 2); i >= 0; i--) {
    heapify(array, i, array.length - 1);
  }

  return array;
};

var heapSort = function(array) {
  array = buildMaxHeap(array);
  var n = array.length - 1;

  while (n > 0) {
    var temp = array[0];
    array[0] = array[n];
    array[n] = temp;
    n--;
    heapify(array, 0, n);
  }

  return array;
};
