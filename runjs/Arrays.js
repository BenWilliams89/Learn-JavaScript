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

// Merge / concat an array

let cats = ['blue', 'kitty']
let dogs = ['rex', 'rusty']
console.log(cats.concat(dogs))
console.log(dogs.concat(cats))

// Includes - does the array include " "
console.log(cats.includes('blue'))
console.log(dogs.includes('ben'))

// indexOf

cats.indexOf('kitty')
console.log(cats.indexOf('kitty'))

// reverse

console.log(dogs.reverse())

// Slice - get a portition/slice/section of an array

let names = ['Ben', 'Emily', 'Katy', 'Sam', 'Derrick', 'David', 'Kay']
console.log(names.slice(3))
console.log(names.slice(3, 6))
console.log(names.slice(-3, 6))
let couple =names.slice(0,2)
console.log(couple)

// Splice - change the contents of an array by removing or replacing elements
// splice takes three values [the starting point, how many to delete, insert/add]

let coolers = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
console.log(coolers.splice(5, 1))
console.log(coolers)

names.splice(2,2)
console.log(names)

coolers.splice(1,0,'red-orange')
console.log(coolers)

coolers.splice(5, 0, 'forrest-green')
console.log(coolers)

// Sort - sort an array - default converts everything to strings

let scores = [1, 70, 100, 2500, 9, -12, 0, 34]
console.log(scores.sort()) // this simply takes the first number in the number and sorts


// Reference types - Two arrays aren't the same but you can create two variables that are the same

let nums = [ 1, 2 ,3]
numsCopy = nums
console.log(numsCopy)

const noom = [2, 4, 6]
noom.push(8)
console.log(noom)


// Nested arrays

const board = [
    ['0', null, 'X'], // index 0
    [null, 'X', 0], // index 1
    ['X', 0, null] // index 2
]
console.log(board)

console.log(board[1]) // this calls index 1
console.log(board[1][1]) // this calls index 1 and the index 1 of that array

// Example of changing a filed/value in a nested array:

const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];


airplaneSeats[3][1] = 'Hugo'
console.log(airplaneSeats)