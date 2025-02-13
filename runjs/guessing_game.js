// Making a Guessing Game

let max = parseInt(prompt('Enter your maximium number'));
while (!max) {
    max = parseInt(prompt('Not a number, enter a number or "q" to quit the game'))
}

const targetNum = Math.floor(Math.random() * max) + 1;

let guess = (prompt('Enter your guess or type "q" to quit'));

let attempts = 1

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    guess = parseInt(guess);
    if (guess > targetNum) {
        guess = prompt(' Too High! Guess a lower number')
        attempts++
    } else if (guess < targetNum) {
        guess = prompt('Too Low, Guess a higher number')
        attempts++
    } else {
        guess = prompt('invalid guess, please enter a number or q to quit')
    }
}
console.log(` Correct! You guessed the answer was ${targetNum}`)

if (guess === 'q'){
    console.log('You quit')
} else {
console.log(`Good job, it took you: ${attempts} guesses`)
}
