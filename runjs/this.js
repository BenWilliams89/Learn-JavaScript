// This keyword in Methods
// Use the keyword this to access other properties on the same object

const person = {
    first: 'Ben',
    last: 'Williams',
    fullname(){
        return `${this.first} ${this.last}`
    }
}
console.log(person.fullname())
console.log(person.first)
console.log(person.last)

const cat = {
    name: 'Blue Steel',
    color: 'Blue',
    breed: 'outside cat',
    meow() {
        console.log(`${this.name} says Meow Meow`)
    }
}
cat.meow()

const meow2 = cat.meow
meow2() // this doesn't bring the cat. through and prints just says meow


