// Functions

// function are a TWO step process

// Step One = define the function & Step Two = run the function

function functionName() {
    // do something
}

// example

function grumpus() {
    console.log('ugh...you again')
    console.log('for the last time...')
    console.log('LEAVE ME ALONE!!')
}
grumpus() // This runs the function - running the runction is Step two

// second example

function singSong() {
    console.log('DO')
    console.log('RE')
    console.log('ME')
}
singSong() // This runs the function



// ** ARGUMENTS **

// Arguments are inputs to a function

function greet(person) {
    var person = 'Ben'
    console.log(`Hi, ${person}!`)
    
}
greet()

// Another example of this

function greeting(name) {
    console.log(`Hi ${name}`)
}
greeting('Emily')

// Exercise Define a function called rant which accepts a string argument called message.
// The function should print out an uppercased version of message 3 times (with 3 separate calls to console.log).

function rant(message) {
    console.log(message.toUpperCase())
    console.log(message.toUpperCase())
    console.log(message.toUpperCase())
}
rant('i hate beets')

// Alternative soloution to the above exercise

function yell(mess) {
    for(let i = 0; i < 3; i++){
        console.log(mess.toUpperCase())
    }
}
yell('i hate pears')

// Functions accepting multiple arguments

function fullName(firstName, lastName) {
    console.log(`Hi there ${firstName} is your last name ${lastName}`)
    console.log(`If so your initals are ${firstName[0]}, ${lastName[0]}`)
}
fullName('Ben', 'Williams')

// Function with a string and a number

function repeat(str, numTimes) {
    for(let i = 0; i < numTimes; i++){
        console.log('HI')
    }
}
repeat('', 5)

// Function with concatination

function reap(msg, times) {
    let result = ''
    for(let i = 0; i < times; i++) {
        result += msg;
    }
    console.log(result)
}
reap('£', 5)

// Exercise - Write a function that accepts two number inputs
// if two 1's print snake eyes otherwise print not snake eyes

function isSnakeEyes(die1, die2) {
    if (die1 === 1 && die2 === 1){
        console.log('Snake Eyes!')
    } else {
        console.log('Not Snake Eyes')
    }
}


isSnakeEyes(1, 1)



// *** The return keyword - The output of the function
// We can capture/store and re-use returns

function addNums(x, y) {
    console.log(x + y)
}
addNums(5, 5)
let total = addNums(6,5)
console.log(total)
// console.logs can't be saved as they return undefined so we use return instead so we can save it as a variable


// using the return
function add(a, b){
    return a + b
}
console.log(add(2,2))

let sum = 4
console.log(sum)

