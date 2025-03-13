// Leveling up our functions

 // Function Scope - variable visability

 // Where we define the where we have access to the function
 

// This is all function scope

 let totalEggs = 0

 function eggs(){
    totalEggs = 6
 }
 console.log(totalEggs)
 eggs()
 console.log(totalEggs)

 //

 let bird = 'crow'

 function birdWatch() {
    let bird = 'pigeon'
 }
 console.log(bird) // this prints crow


 // Now i move console inside the function

 let birrd = 'crow'

 function birdShow() {
    let birrd = 'pigeon'
    console.log(birrd)
 }
 birdShow()  // this prints pigeon


// we remove the brd from the function

 let brd = 'crow'

 function birdFetch() {
    console.log(brd)
 }
 birdFetch() // this prints crow

 // Quiz question

 let deadlyAnimal = "Blue-Ringed Octopus";
 
function handleAnimal() {
    let deadlyAnimal = "Scorpionfish";
    console.log(deadlyAnimal);
}
 
handleAnimal();
console.log(deadlyAnimal)