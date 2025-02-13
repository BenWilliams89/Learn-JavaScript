// Making a Guessing Game

let max = parseInt(prompt('Enter your maximium number'));
while (!max) {
    max = parseInt(prompt('Not a number'))
}

const targetNum = Math.floor(Math.random() * max) + 1

let attempts = 1

let guess = parseInt(prompt('Enter your guess'));

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++
    if (guess > targetNum) {
        guess = (prompt(' Too High! Guess a lower number'))
    } else {
        guess = (prompt('Too Low, Guess a higher number'))
    }
}
console.log(` Correct! You guessed the answer was ${targetNum}`)

if (guess === 'q'){
    console.log('You quit')
} else {
console.log(`Good job, it took you: ${attempts} guesses`)
}
