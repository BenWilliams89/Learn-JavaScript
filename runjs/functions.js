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
