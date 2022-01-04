//https://www.geeksforgeeks.org/node-js-events/---->reference

// Events module 
//Node.js has a built-in module, called "Events",
//where you can create-, fire-, and listen for- your own events.

// Example 1- Registering for the event to be fired only one time using once.

// Example 2- Create an event emitter instance and register a couple of callbacks

// Examole 3- Refistering for the event with callback parameters


//-------------------------------------------------
// const event =require('events');
// const EventEmitter = new event.EventEmitter();
//-------------------------------------------------


const EventEmitter =require('events');
const event = new EventEmitter();
 
event.on("sayMyName",()=>{
    console.log(" your name is vishwajeet kumar");
})
event.emit("sayMyName");     