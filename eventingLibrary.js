/*
 * Make an eventing system mix-in that adds .trigger() and .on() to any input
 * object.
 *
 * Example usage:
 * var obj = mixEvents({ name: 'Alice', age: 30 });
 * obj.on('ageChange', function(){ // On takes an event name and a callback function
 *    console.log('Age changed');
 * });
 * obj.age++;
 * obj.trigger('ageChange'); // This should call our callback! Should log 'age changed'.
 *
 * Caveats:
 * - mixEvents should return the original object it was passed after extending it.
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function as well. That is to say, we can have multiple
 *   listeners for an event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

/*
LOGIC:

- creating a "mixEvents" function
  - adds an "on" method and a "trigger" method to the object that gets passed in
  - returns the original object with its added methods

- create an event listeners collection within the passed in object, with keys and associated function values

- "on" method creates the event listeners in the collection
- "trigger" method invokes those functions, passing in any additional arguments to invoked functions

*/

var mixEvents = function(obj) {
  // create a events collection within the object
  obj.events = {};
  // create the "on" method (accepts an event name and a callback function)
  obj.on = function(event, cb) {
    // create a key in the events collection, set it equal to the callback function
    obj.events.event = cb;
  }

  // create the "trigger" method (accepts an event name)
  obj.trigger = function(event) {
    // create array representing additional arguments passed in
    var args = Array.prototype.slice.call(arguments, 1);
    // invoke the function associated with the event name as key in the events collection
    obj.events.event.apply(null, args);
  }

  // output original object
  return obj;
}

var obj = mixEvents({ name: 'Alice', age: 30 });
obj.on('ageChange', function(b){ // On takes an event name and a callback function
   console.log('Age changed', b);
});
obj.age++;
obj.trigger('ageChange', 3); // This should call our callback! Should log 'age changed'.