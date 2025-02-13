// For Of Loops

// For Of loops are a easy way to iterate through arrays

const subreddit = ['cinge', 'books', 'chickens', 'funny', 'pics', 'football']

// Normal for loop

for (let i = 0; i < subreddit.length; i++) {
    console.log(subreddit[i])
}

// this can be condesed with a for of loop

const names = ['Ben', 'Emily', 'Sam', 'Clive', 'Elaine']

for (name of names) {
    console.log(name)
}

// iterating over strings

for (let char of 'Help'){
    console.log(char)
}

