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

// Nested Conditionals

let password = prompt('please eneter a new passwors');

if (password.length >= 6) {
    if (password.indexOf(' ') === -1){
        console.log('Password passes due to no spaces and correct length')
} else {
    console.log('Password can not have a space')
}
} else {
    console.log('password to short')
}

// Logocal && (And) operator

const mystery = Peterparker7

// This means mystery must start with a capital P, be over 5 characters & include the number 7

if(mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1){ 
    console.log("YOU GOT IT!!!");
}


// Switch Statements

const day = 2;
switch (day) {
    case 1:
        console.log('MONDAY');
        break;
    case 2:
        console.log('TUESDAY');
        break;
    case 3:
        console.log('WEDNESDAY');
        break;
    case 4:
        console.log('THURSDAY');
        break;
    case 5:
        console.log('FRIDAY');
        break;
    case 6: 
        console.log('SATURDAY');
            break;
    default:
        console.log('SUNDAY')
}