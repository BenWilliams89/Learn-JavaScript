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



// spread with Objects
// copies properties from one object into another object 

const feline = {
    legs: 4,
    family: 'Felidae'
}

const canine = {
    isFurry: true,
    family: 'Caninae'
}

console.log({... feline})
console.log({... feline, color: 'black'})

const catDog = {...feline, ...canine, family: 'Steele'}
console.log(catDog);

// Used when creating copies of objects

// a user provides this info to your website but you need to add it to the crm with other info

const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'blue123',
    username: 'bman'
}

console.log({...dataFromForm}) // this calls and copies the data
const newUser = {...dataFromForm, id: 2345, isAdmin: false} // this adds existing data 
console.log(newUser);

