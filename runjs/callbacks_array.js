// Callbacks & Array Methods

// The ForEach Method
// accepts a callback function
// calls the function once per element in the array

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

nums.forEach(function (num){
  console.log(num * num)  
})

console.log('*****') // used to break up console


// Display even numbers

nums.forEach(function(even){
    if (even % 2 === 0) {
        console.log(even)
    }
})

console.log('*****') // used to break up console


// Display odd numbers

const numbers = [1,2,3,4,5,6,7,8,9,10]
numbers.forEach(function(odd){
    if(odd % 2 !==0) {
        console.log(odd)
    }
})

console.log('*****') // used to break up console


// This is the most common way

const numbersArray = [1,2,3,4,5,6,7,8,9,10]

numbersArray.forEach(function(num) {
    console.log(num);
    
})


console.log('*****') // used to break up console


// for loop is now common for this instead of foreach
for (let number of numbers){
    console.log(number)
}


const movies = [
    {
        title: 'Aloha',
        score: 99
    },
    {
        title: 'Stand by me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    },
    {
        title: 'Bridget Jones',
        score: 75
    },
    {
        title: 'Love Actually',
        score: 45
    }
]

 movies.forEach(function(movie){
     console.log(`${movie.title} - ${movie.score}/100`);
    
 })


 console.log('*****') // used to break up console

 // The below is more commonly used

 for(movie of movies){
     console.log(`${movie.title}`)
}
