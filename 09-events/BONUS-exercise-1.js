/*
    There is an argument that gets passed to our
    even handler function by default.

    1. What is it and what types of properties 
       does it have?

    2. Does it change depending on the event type?

    HINT* Look this up on MDN/Google
*/

/**
 *  when an event handler function is called, it typically receives an Event object as an argument by default.
 *  This Event object contains information about the event that occurred, 
 * such as the type of event, the target element, and any additional data related to the event.
 * The Event object has various properties
 * type: Specifies the type of the event (e.g., "click", "mouseover", "keydown").
 *target: References the element that triggered the event.
 *currentTarget: References the element that the event handler is currently processing.
 *timeStamp: Represents the time at which the event was created.
 *preventDefault(): A method that, if called, prevents the default action associated with the event from taking place.
 *stopPropagation(): A method that, if called, stops the event from propagating further.
 *stopPropagation() is the method used to stop both event propagation and bubbling in JavaScript event handling
    
    element.addEventListener('click', function(event) {
        event.stopPropagation(); // Stops propagation
        event.stopImmediatePropagation(); // Stops propagation and prevents other handlers
    });

 *Propagation: Refers to the flow of the event through the DOM tree, which includes both capturing and bubbling phases.
 *Bubbling: Specifically refers to the upward phase of event propagation, where the event moves from the target element up to its ancestors in the DOM hierarchy.
 */

// Allow propagation but prevent bubbling
element.addEventListener(
  "click",
  function (event) {
    // This event handler captures the event but does not allow it to bubble up
  },
  true
); // <- Setting the third argument to true makes it a capturing event listener

// Allow bubbling but prevent propagation
element.addEventListener("click", function (event) {
  // This event handler allows bubbling but prevents further propagation
  event.stopPropagation(); // <- This stops propagation beyond this point
});
