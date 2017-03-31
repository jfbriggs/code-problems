// Given a large array of integers and a window of size 'w',
// find the current maximum in the window as the window slides through the entire array.

// Output = array of maximums

/*
Logic:
- Generate an array representing first set of elements in window
- Find the max within that set of elements
- Push the max to a results array
- Iterate forward
*/

var findMaximum = function(nums, w) {
  var result = [];
  var win = [];
  for (i = 0; i < nums.length; i++) {
    win.push(nums[i]);
    if (win.length > w) {
      win.shift();
    }
    if (win.length === w) {
      result.push(getMax(win));
    }
  }

  return result;
}

var getMax = function(array) {
  return array.reduce(function(a, b) {
    return Math.max(a, b);
  });
}