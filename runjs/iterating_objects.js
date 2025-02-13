// Iterating over objects

const testScores = {
    keenan: 80,
    damon: 85,
    ben: 75,
    emily: 95,
    jimmy: 77,
}

for(let person in testScores){
console.log(`${person} scored: ${testScores[person]}`);
}

// add scores

//let total = 0

//for(let score of Object.values(testScores)){
  //  total += score
    //console.log(total);
//}

let total = 0

let scores = Object.values(testScores)
for(let score of scores) {
    total += score
}

console.log(total/scores.length)
