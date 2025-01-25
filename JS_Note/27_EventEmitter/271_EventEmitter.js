/**
 * https://www.freecodecamp.org/news/how-to-code-your-own-event-emitter-in-node-js-a-step-by-step-guide-e13b7e7908e1/
 * 
 * when emit calls, a listener is added to its internal array of listeners.
 * 
 * Always use .on('error') for error handling
 * 
 */

const EventEmitter = require('events');

class Emitter extends EventEmitter {}

const event = new Emitter();

event.on('foo', function() {
    console.log('event fired');
});
event.on('foo', () => {
    console.log('event fired foo');
});
event.emit('foo');

event.once('bar', () => {
    console.log('event fired bar');
});

event.emit('bar');
event.emit('bar');
event.emit('bar');


// Intersting newListener event, which is emitted whenever a new listener is added to the event emitter.
event.once('newListener', (event, listener) => {
  if (event === 'event') {
    // Insert a new listener in front
    // myEmitter.emit('event');       // Prints: A
    myEmitter.on('event', () => {
      console.log('B');
    });
    myEmitter.emit('event');          // Prints: B A
  }
});
event.on('event', () => {
  console.log('A');
});
event.emit('event');
