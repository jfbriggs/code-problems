'use strict';

/* Implement the function asyncMap:
 *
 * asyncMap has two parameters, an array of asynchronous
 * functions (tasks) and a callback.
 * Each of the tasks takes a separate callback and invokes
 * that callback when complete.
 *
 * The callback passed to asyncMap is then performed on the
 * results of the callbacks of the tasks.
 *
 * The order of these results should be the same as the order
 * of the tasks.
 * It is important to note that this is not the order in which
 * the tasks return, but the order in which they are passed to
 * asyncMap.
 *
 * Once all the callbacks of the tasks are returned, asyncMap
 * should invoke the callback on the results array.
 *
 * Example:
 *
 * asyncMap([
 *  function(cb){
 *    setTimeout(function(){
 *      cb('one');
 *    }, 200);
 *  },
 *  function(cb){
 *    setTimeout(function(){
 *      cb('two');
 *    }, 100);
 *  }
 * ],
 *  function(results){
 *    // the results array will equal ['one','two'] even though
 *    // the second function had a shorter timeout.
 *    console.log(results); // ['one', 'two']
 * });
 *
 */

var asyncMap = function(tasks, cb) {
  // create a results array
  var results = [];
  // create a variable to represent how many functions have completed executing
  var completed = 0;

  // inner function to invoke a func from tasks list (accepts function and index)
  var runTask = function(task, i) {
    // invoke the function, pass in callback which accepts a value
    task(function(value) {
      // add the value to results array at associated index
      results[i] = value;
      // increment completed value
      completed++;
      // if completed value matches original task list length
      if (completed === tasks.length) {
        // invoke the final callback on results array
        cb(results);
      }
    });
  }

  // iterate through array of functions ("tasks") (for loop with iterator "i")
  for (var i = 0; i < tasks.length; i++) {
    // run the runTask function on the current function
    runTask(tasks[i], i);
  }

}
