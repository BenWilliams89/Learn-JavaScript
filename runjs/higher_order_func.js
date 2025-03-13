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



