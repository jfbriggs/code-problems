// Given an unsorted array, sort it in ascending order using a heap sort.

/*
Logic:

3 Parts: overall heapsort function, heapify function, build max heap function

Heapify: compares an element to its children, determines the greatest value, swaps it with a child if necessary (and re-runs at new location if swapped)

Build Max Heap: iterates backward from array.length/2 (rounded down) running heapify on each element

Heapsort: Runs build max heap once, then iterates downward from last index; swapping last element with root, then run heapify on new first element

*/

var heapify = function(array, i, last) {
  // max variable and set it to parent index
  var max = i;
  // variables to represent child indices
  var first = i * 2 + 1, second = i * 2 + 2;
  // if first child exists and is greater than parent but less than or equal to last
  if (first <= last && array[first] > array[max]) {
    // set that child index to be new max
    max = first;
  }

  // if second child exists and is greater than parent but less than or equal to last
  if (second <= last && array[second] > array[max]) {
    // set that child index to be new max
    max = second;
  }

  // if element at max index is not the same value as element at original index
  if (max !== i) {
    // swap them
    var temp = array[i];
    array[i] = array[max];
    array[max] = temp;
    // re-run heapify on new max index
    heapify(array, max, last);
  } else { // otherwise (if original element is still greatest)
    // output the array
    return array;
  }

}

var buildMaxHeap = function(array) {
  // iterate backward from array length / 2 rounded down
  for (var i = Math.floor(array.length / 2); i >= 0; i--) {
    // run heapify on current index
    heapify(array, i, array.length - 1);
  }

  // return array
  return array;
}

var heapSort = function(array) {
  // invoke buildMaxHeap on the array
  array = buildMaxHeap(array);
  // iterate backward from last element in the array (stopping at first index)
  for (var i = array.length - 1; i > 0; i--) {
    // swap the current element with the first element
    var temp = array[0];
    array[0] = array[i];
    array[i] = temp;
    // run heapify, passing in first index and current - 1
    heapify(array, 0, i - 1);
  }

  // output array
  return array;
}
