// Every & Some methods

// Only returns if every element is true or false
// This returns a Boolean Value

const words = ['dog', 'dig', 'log', 'bag', 'wag']

// words.every(function(word){
//     return word.length === 3;
// })

const wordLength = words.every(word => {
    return word.length === 3
})
console.log(wordLength);



const start = words.every(word => word[0] === 'd')
console.log(start);



const end = words.every(w => {
    let last_letter = w[w.length - 1];
    return last_letter === 'g'
})
console.log(end);


console.log('*****'); // break up the console



// ** SOME **
// Returns True if any elements pass the test function

const tags = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag']

const length = tags.some(function(length){
    return length.length < 5
})
console.log(length);

 const cupcake = tags.some(function(cake){
    return cake.includes('cup')
})
console.log(cupcake);



// Exercise
// if the array contains all even numbers return true otherwise return false

 function allEvens(array){
    return array.every(function(num){
         return num % 2 === 0
     })
 }
  







