// Array examples

let students = [] // empty array

let colors = ['red', 'orange', 'yellow'] // array of strings

let lottoNums = [19, 22, 56, 12, 51] // array of numbers

let stuff = [true, 68, 'cat', null] // a mixed array with boollean, number, string & null

// Modifying an array:

let colours = ['rad', 'orange', 'yallaw']

colours[0] = 'red'
console.log(colours)
colours[2] = 'yellow'
console.log(colours)
colours[1] = 1
console.log(colours)

// Adding to an existing array

let beatles = ['John', 'Paul', 'George']
console.log(beatles)
beatles[3] = 'Ringo'
console.log(beatles)

// Array methods (add, remove items to a string etc)

let movieLine = ['tom', 'Ben']
movieLine.push('Emily')
// Add
console.log(movieLine)
// Update
movieLine[0] = 'Tom'
console.log(movieLine)
// Remove
movieLine.pop()
console.log(movieLine)
// Add removed result to a variable
let person = movieLine.pop()
console.log(person)

// Add & Remove to the end example

let barbell = []
barbell.push(45)
barbell.push(25)
barbell.push(35)
barbell.push(10)
console.log(barbell)
barbell.pop()
console.log(barbell)

// Add & Remove from the start - Shift & Unshift
let line = ['Tom', 'Ben', 'Emily', 'Darren', 'Nick']
console.log(line)
let lost = line.pop()
console.log(lost)
console.log(line)
line.shift()
console.log(line)
line.unshift('Clive')
console.log(line)