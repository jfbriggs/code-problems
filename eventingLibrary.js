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
  var events = {};

  obj.on = function(event, cb) {
    events.event = events.event || [];
    events.event.push(cb);
  }

  obj.trigger = function(event) {
    if (events.event) {
      var args = Array.prototype.slice.call(arguments, 1);
      events.event.forEach(function(func) {
        func.apply(null, args);
      });
    }
  }

  return obj;
}
