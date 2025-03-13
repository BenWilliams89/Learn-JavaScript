// Reduce

// Executes a reducer function on each element of an array resulting in a single value

// [3, 5, 7, 9, 11].reduce((accumalator, currentValue)=> {
//     return accumalator + currentValue
// })


 const prices = [9.99, 1.50, 19.99, 49.99, 30.50] 
// let total = 0

// for (let price of prices) {
//     total += price
// } 
// console.log(total)


// Find min price

const total = prices.reduce(function(min, price){
    if (price < min) {
        return price
    }
    return min
})
console.log(total);

const movies = [
    {
        title: 'helllo',
        score: 99,
        year: 2020
    },
    {
        title: 'hi',
        score: 97,
        year: 2020
    },
    {
        title: 'Goodbye',
        score: 95,
        year: 2020
    }
]

const highMovie = movies.reduce(function(bestMovie, currMovie){
    if(currMovie.score > bestMovie.score) {
        return currMovie
    }
    return bestMovie
})

console.log(highMovie);


// even numbers

const evens = [2, 4, 6, 8];
evens.reduce((sum, num)=> {
    return sum + num
})
console.log(evens);

const one = evens.reduce((sum,num) => sum + num, 100)
console.log(one);

const two = evens.reduce((sum,num) => sum + num, 40)
console.log(two);

const three = evens.reduce((sum,num) => sum + num, 4)
console.log(three);








