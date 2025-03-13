// Arrow functions

// A compact alternative to a regular function expression

const square = (x) => {
    return x * x
}
console.log(square(2))

// Another example

const sum = (num1, num2) => {
    return num1 + num2
}
 
console.log(sum(5, 5)); 

//  Arrow function without anything in no arguments

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1
}
console.log(rollDie());


// Arrow function exercise
// Write a arrow function called greet that accepts a single argument representing a persons name
// it should return a greet string like so:
// greet("Hagrid") should return Hey Hagrid!

const greet = (names) => {
    return `Hey ${names}!`
}
console.log(greet('Ben'));
 
// ** Arrow function implicit returns **