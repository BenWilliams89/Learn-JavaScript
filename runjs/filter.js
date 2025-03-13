// The filter Method

// filter creates a new array from an existing array with a filter rule

const nums = [9,8,7,6,5,4,3,2,1]
const odds = nums.filter(function(num) {
    return num % 2 === 1
})
console.log(odds)

const smallNums = nums.filter(function(number){
    return number < 5
})
console.log(smallNums);

// Another example using movies

const movies = [
    {
        title: 'Die Hard',
        score: 90,
        year: 1989
    },
    {
        title: 'Die Hard 2',
        score: 95,
        year: 1999
    },
    {
        title: 'Shrek',
        score: 89,
        year: 1990
    },
    {
        title: 'Love Actually',
        score: 70,
        year: 1989
    },
    {
        title: 'Romeo & Juliet',
        score: 92,
        year: 1985
    }
]

const bestMovie = movies.filter(function(movie) {
    return movie.score > 88
}) 

const goodTitle = bestMovie.map(function(title){
    return title.title
})
console.log(goodTitle);




const badMovie = movies.filter(function(movie) {
    return movie.score < 89
})



const recentMovie = movies.filter(function(movie) {
    return movie.year > 1989
})

console.log(bestMovie);
console.log(badMovie);
console.log(recentMovie);



// filter Exercise


 


 