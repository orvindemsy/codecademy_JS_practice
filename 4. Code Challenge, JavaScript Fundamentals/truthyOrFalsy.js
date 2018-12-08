/*
truthyOrFalsy()
It can be hard to keep track of what's truthy or falsy in JavaScript. Write a function, truthyOrFalsy(), that takes in any value and returns true if that value is truthy and false if that value is falsy.
*/

// Write your function here:

const truthyOrFalsy = value => {
    if (value) {
        return true
    }
    return false

/*
// As a function declaration:
function truthyOrFalsy(value) {
    if (value) {
        return true
    } else {
        return false
    }
}

// Using a ternary: 
const truthyOrFalsy = value => value ? true : false 
*/



// Uncomment the line below when you're ready to try out your function
console.log(truthyOrFalsy(false)) // Should print false

// We encourage you to add more function calls of your own to test your code!
