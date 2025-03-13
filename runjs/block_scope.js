// Block Scope - loops & conditionals - simialar to function just with conditionals

let radius = 8

if (radius > 0) {
    const pi = 3.14159
    let msg = 'HIII!'
}

console.log(radius) // prints 8
// console.log(pi) // prints an error
// console.log(msg)) // prints an error

for (let i = 0; i < 5; i++){
    let message = 'Hello Ben'
    console.log(message)
}
//console.log(message) //- This also prints an error as i have no access to it after the loop

