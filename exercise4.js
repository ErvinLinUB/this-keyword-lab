// Exercise 4: Identifying the Bug

const box = document.querySelector('.box');

box.addEventListener('click', (event) => {

    // BUG: this.classList.add('active') throws an error
    // this.classList.add('active');

    /*
    Add a comment (2–3 sentences) explaining why the arrow function causes this to fail in this context.

    - The reason why the arrow function caused it to fail is because arrow functions do not have their own "this" binding. They instead inherit "this" from the surrounding lexical scope (also known as the parent function or global scope). In this case, "this" refers to the global window object not the box element that was clicked which is why this.classList is undefined and throws an error.
    */

    // Fix the bug using event.currentTarget (do NOT convert to a regular function).
    event.currentTarget.classList.add('active');

    /*
    Add a second comment explaining what event.currentTarget returns and why it solves the problem

    - Using event.currentTarget returns the element that the event listener is attached to (which is the box element). Unlike "this" which is affected by arrow function scoping, event.currentTarget always points to the element that registered the listener making it the perfect replacement when arrow functions prevent using "this".
    */
});