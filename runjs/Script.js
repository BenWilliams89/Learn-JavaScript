console.log('Hello, World!');

let total = 30 + 1
console.log(total)

// IF Statement //
console.log('Before If Statement')
let age = 19
    if (age >= 18) {
        console.log('You may enter the pub')
    }
console.log('After If Statement')

// If statement with Math.random()

console.log('Before Math Statement')
let random = Math.random();
if (random < 0.5) {
    console.log('Your number is less then 0.5' )
    console.log(random)
}
console.log('After Math Statement')

// Else If Statement

let dayOfWeek = 'Saturday';

    if (dayOfWeek === 'Monday') {
        console.log('eeek Monday')
    } else if (dayOfWeek === 'Saturday') {
        console.log("Thank god i'ts Saturday")
    }

// Else Statement

let month = 'April';

if (month === 'January') {
    console.log('12 months to go')
} else if (month === "March") {
    console.log('Birthday Month')
} else {
    console.log("it's not Jan or March")
} 
