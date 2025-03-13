// The Map method - Used in interviews

// creates a new array with the results of calling a callback on every element in the array

// Takes the exisiting texts array and creates a new array of caps

const texts = ['rofl', 'lol', 'omg', 'ahaha']
const caps = texts.map(function(str){
    return str.toUpperCase()
})
console.log(texts)
console.log(texts[2])
console.log(caps)
console.log(caps[2])


const numbers = [1,2,3,4,5,6,7,8,9]

const double = numbers.map(function(num) {
    return num * 2
})
console.log(double)

 // Map Exercise

 const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// Write your code here

const firstNames = fullNames.map(function(name){
    return name.first
})
console.log(firstNames)