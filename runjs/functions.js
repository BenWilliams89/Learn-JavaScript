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
// If we want to save the outcome of a function use return

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

// Exercise writing a function that returns two numbers with the return statement

function multiply(num1, num2){
    return num1 * num2
}
multiply(2,2)

// Exercise - write a function with a return to decide to wear shorts if temp >= 75
function isShortsWeather(temperature){
    if(temperature >= 75){
        return true
    }
    return false
}
console.log(isShortsWeather(80))
console.log(isShortsWeather(48))
console.log(isShortsWeather(75))


// Exercise - create a function called last element which accepts a single array as an argument
// the function should return the last element of the array
// if the array is empty it should return null

function lastElement(array) {
    if (array.length === 0) {
        return null
    } else {
        return array[array.length - 1]
    }
}
console.log(lastElement([]))

//  Exercise - create a capitalize function that returns a string with its first letter capitalised

function capitalize(string){
    return string[0].toUpperCase() + string.slice(1) // string[0] selects the first letter and slice means start at index of 1
}
console.log(capitalize('emily'))

// Exercise - Write a function called sumArray which accepts a single argument - an array of numbers
// it should return the sum of all the numbers in the array

function sumArray(array){
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total
}
console.log(sumArray([5, 2]))

// An additional way to solve the above

function sumArray(nums) {
    let total = 0;
    for (let num of nums) {
      total += num;
    }
    return total;
  }
console.log(sumArray([5, 2]))

// Exercise

function returnDay(num) {
    if (num < 1 || num > 7) {
        return null
    } else if (num === 1) {
        return 'Monday'
    } else if (num === 2) {
        return 'Tuesday'
    } else if (num === 3) {
        return 'Wednesday'
    } else if (num === 4) {
        return 'Thursday'
    } else if (num === 5) {
        return 'Friday'
    } else if (num === 6) {
        return 'Saturday'
    } else if (num === 7) {
        return 'Sunday'
    } 
}

console.log(returnDay(1))

// An alternative to the above is:

// A Switch statement
function returnDay(num) {
    switch (num) {
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thursday';
      case 5:
        return 'Friday';
      case 6:
        return 'Saturday';
      case 7:
        return 'Sunday';
      default:
        return null;
    }
  }
  console.log(returnDay(2))

  // A better alternative to the above is:

  function returnDay(num) {
    const days = [null, 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (num < 1 || num > 7) {
      return null;
    } else {
      return days[num];
    }
  }

  console.log(returnDay(5))

  // Another good way

  function returnDay(num) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (num < 1 || num > 7) {
      return null;
    } else {
      return days[num - 1];
    }
  }
  console.log(returnDay([6]))
