// Functions defining methods
// We can add functions as properties on objects
// Every method is a function
// Noit all functions are methods

// Math method/object
// Methods are called with the .dotnotation then add the num() = math.multiply(5,5)

const math = {
    multiply : function(x, z) {
        return x * z
    },
    divide : function(x, z) {
        return x / z
    },
    square : function(x){
        return x * x
    }
}
console.log(math.divide(10,5))

// Another example

 const myMath = {
    PI: 3.14,
    square: function(num){
        return num * num
    },
    cube: function(num) {
        return num * num * num // or num ** 3
    }
 }

 console.log(myMath.PI)
 console.log(myMath.square(2))
 console.log(myMath.cube(5)) 

 // You could also run
 // myMath['cube'](5)

// ** Shorthand for this: **

const maths = {
    blah: 'Hello',
    add(x, y) {
        return x + y
    },
    multiply(x, y){
        return x * y
    }
}
console.log(maths.add(10,20))
console.log(maths.multiply(10,2))
