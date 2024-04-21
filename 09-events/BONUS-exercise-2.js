/*
    What is the "this" Object inside an event
    handler function?
*/
// Attaching an event handler to an HTML element
element.addEventListener("click", function (event) {
  // Inside this function, 'this' refers to 'element'
});
// Attaching an event handler using an arrow function
element.addEventListener("click", (event) => {
  // Inside this arrow function, 'this' refers to the lexical context
  // where the arrow function is defined, not the element
});
const obj = {
  handleClick(event) {
    // Inside this method, 'this' refers to 'obj'
  },
};

element.addEventListener("click", obj.handleClick);

function handleClick(event) {
  // Inside this function, 'this' could be explicitly bound
}

// Binding 'this' to a specific object
const boundHandler = handleClick.bind(someObject);
element.addEventListener("click", boundHandler);

function handleInput(e) {
  console.log(this); //<input type="text">
}
const input = document.querySelector("input");
input.addEventListener("input", handleInput);
