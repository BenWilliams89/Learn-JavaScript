// for loops & Arrays

//For loops have 3 stages:
// the variable, the expression & the increment/decrement
// let i = 1;      i <= 10;             i++


// Instead of printing the same thing ten times 

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)

// We use loops to save time

// starts at 1 - stop at 10 - add 1 each time

for (let i = 1; i <=10; i++) {
    console.log(i)
}

// Another example

for (let B = 1; B < 6; B++) {
    console.log('Hello Ben')
}

// loop printing even numbers

for (let E = 0; E <=20; E+= 2) {
    console.log(E)
}

// count down from 100

for (let h = 20; h >= 0; h--){
    console.log(h);
}

// count down from 100 in 10s

for (let t = 100; t >=0; t -= 10) {
    console.log(t)
}

// multiple by 10

for (let m = 10; m <= 1000; m *= 10) {
    console.log(m);
    
}

// Looping Over Arrays

// To loop over an array, start at index 0 and continue looping until the last index

const animals = ['lions', 'tigers', 'bears']

for (let i = 0; i < animals.length; i++) {
        console.log(i,animals[i])
    }

// Return an array as Uppercase

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; 
    
for (let i = 0; i < people.length; i++){
        console.log(people[i].toUpperCase());
    }