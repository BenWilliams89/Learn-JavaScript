//  While Loops

//  While loops continue running as long as the consition is true

let count = 0;
while (count < 10) {
    count++
    console.log(count)
}

// A while loop is used when you don't know how many loops are required - like Chess

const password = 'BabyHippo'

//let guess = prompt("enter your password...")
//while(guess !== password){
//  guess = prompt("try again")
    
//} 
console.log('Congarts')



// The break keyword is used often with While Loops:
// Break = break out

let targetNum = Math.floor(Math.random() * 10);
let guesses = Math.floor(Math.random() * 10);

while (true) {
    guesses = Math.floor(Math.random()* 10)
    if (guesses === targetNum) {
        console.log(`Correct! Guessed: ${guesses} and the answer was ${targetNum}`);
        break;
    }
    else {
        console.log(`Guessed: ${guesses}...Incorrect, try again`)
    }
}

//example of a repeting while loop

// let input = prompt('say hello')
//while (true) {
  //  input = prompt(input)
    //if (input.toLowerCase === 'stop copying me') {
      //  break;
    //}
//}
//console.log('OK you win')

for (let i = 0; i < 1000; i++) {
    console.log(i);
    if (i === 100)
    break;
}

