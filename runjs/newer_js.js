// New JavaScript features

// default paramaters (a, b) - could return undefined if not set
// we can add = to set a default (a, b = 1)


// this example sets numsides to 6 as defualt so no argument is required when calling the function
function rollDie(numSides = 6){
    return Math.floor(Math.random() * numSides) +1
}
console.log(rollDie());

// Another example where I put the message & person as defualts

function greet(msg = 'hi', person = 'Dan'){
    console.log(`${msg}, ${person}`) 
}
greet()


// Spread in Function Calls
// allows iterable like an array to be expanded

console.log(Math.max(12,28,31))
console.log(Math.min(12,28,31))

const nums = [12, 28, 31]
console.log(Math.max(nums)) // this returns NaN as Math was expecting multiple arguments and not an array

// Instead we do the same but with ... - this is called spread
console.log(Math.max(...nums)) // The ... allows the Math to now work

// Same but with a string
console.log('hello')
console.log(...'hello')


// Spread in arrays

const cats = ['Blue', 'Scout', 'Rocket']
const dogs = ['Rusty', 'Wyatt']

const allPets = cats + dogs
console.log(allPets);

const allpets = [... cats, ...dogs]
console.log(allpets);

