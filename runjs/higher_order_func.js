// Higher Order Functions
// Functions that work with other functions
// accept other functions as arguments
// return a function

// function expression example
let greet = function() {
    console.log('hi')
}
greet()



// functions as arguments

function callTwice(func) {
    func()
    func()
}

function laugh() {
    console.log('HAHAHAHAHAHA')
}

callTwice(laugh)

// Another example - this time it calls the function above

function tenTimes(f){
    for(let i = 0; i <10; i++){
        f()
    }
}
tenTimes(greet)


// ** Returning a function as a value from within a function **

function makeMysteryFunc() {
    const rand = Math.random()
    if (rand > 0.5) {
        return function () {
            console.log('Congrats I am a good function')
        }
    } else {
        return function () {
            console.log('Bad luck you lose')
        }
    }
}

console.log(makeMysteryFunc())

const mystery = makeMysteryFunc() // this sets the variable to a function
mystery()

// A function generating a function

function makeBetweenFunc(min, max) {
    if(min >= max){
        return null
    } else {
        return 'Yes'
    }
}
console.log(makeBetweenFunc(5,10))


// Alternative version

function isBetween(num) {
    return num >= 50 && num <= 100
}
console.log(isBetween(55))


// create one function for multiple rules

function age(min, max){
    return function(num){
        return num >= min && num <= max;
    }
}

const child = age(0,17)
console.log(child(50))

const adult = age(18,65)
console.log(adult(21))

const senior = age(66,160)
console.log(senior(31))







