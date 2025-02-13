//  While Loops

//  While loops continue running as long as the consition is true

let count = 0;
while (count < 10) {
    count++
    console.log(count)
}

// A while loop is used when you don't know how many loops are required - like Chess

const password = 'BabyHippo'

let guess = prompt("enter your password...")
while(guess !== password){
    guess = prompt("try again")
    
} 
console.log('Congarts')

// The break keyword is used often with While Loops:

