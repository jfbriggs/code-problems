// Given an unsorted array, sort it in ascending order using a heap sort.

/*
Logic:

3 Parts: overall heapsort function, heapify function, build max heap function

Heapify: compares an element to its children, determines the greatest value, swaps it with a child if necessary (and re-runs at new location if swapped)

Build Max Heap: iterates backward from array.length/2 (rounded down) running heapify on each element

Heapsort: Runs build max heap once, then iterates downward from last index; swapping last element with root, then run heapify on new first element

*/

var heapify = function(array, i, n) {
  // variable to represent left child
  // variable to represent right child
  var left = 2 * i + 1, right = 2 * i + 2;
  // variable to represent max value in 3-way comparison
  var max;
  // if left child is in bounds and is greater than current element
  if (left <= n && array[left] > array[i]) {
    // max becomes left child
    max = left;
  } else { // otherwise
    // max becomes current element
    max = i;
  }
  // if right child is in bounds and is greater than max
  if (right <= n && array[right] > array[max]) {
    // max becomes right child
    max = right;
  }
  // if max is not the current element
  if (max !== i) {
    // swap the current element with max
    var temp = array[i];
    array[i] = array[max];
    array[max] = temp;
    // re-invoke heapify on new index
    heapify(array, max);
  }
};

var buildMaxHeap = function(array) {
  // iterate downwards from rounded down midpoint
  for (var i = Math.floor(array.length / 2); i >= 0; i--) {
    // for each element, run heapify on it (pass in array length - 1 as n)
    heapify(array, i, array.length - 1);
  }

  return array;
};

var heapSort = function(array) {
  // invoke build max heap to create a max heap off the bat
  array = buildMaxHeap(array);
  console.log('Initial max heap', array);
  // set a variable to represent current rightmost point of active heap (the chunk of the array not officially sorted) (starts at array length - 1)
  var n = array.length - 1;
  // while the above variable is greater than 0
  while (n > 0) {
    // swap the first value in the array with the value at the rightmost point
    var temp = array[0];
    array[0] = array[n];
    array[n] = temp;
    // decrement the rightmost point variable
    n--;
    // invoke heapify on the first value in the array
    heapify(array, 0, n);
  }
  // output the array
  return array;
};

var arr = [10, 1, 6, 2, 25, 15, 9, 8, 3, 11, 7, 40, 4];
console.log(heapSort(arr));