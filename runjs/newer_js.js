// New JavaScript features

// default paramaters (a, b) - could return undefined if not set
// we can add = to set a default (a, b = 1)


// this example sets numsides to 6 as defualt so no argument is required when calling the function
function rollDie(numSides = 6){
    return Math.floor(Math.random() * numSides) +1
}
console.log(rollDie());

// Another example where I put the message & person as defualts

function greet(msg = 'hi', person = 'Dan'){
    console.log(`${msg}, ${person}`) 
}
greet()


 