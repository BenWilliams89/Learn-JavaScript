// object data structure - key: value, - order doesn't matter

const fitBitData = {
    totalSteps: 30500,
    totalMile: 15,
    avgCalorieBurn: 200,
    workoutsThisWeek: ' 5 of 7',
    averageGoofSleep: '5:45'
}

const person = {
    firstName: 'Ben',
    lastName: 'Williams',
}
console.log(person)

const kitchenSink = {
    favNum: 31,
    isFunny: true,
    colors: ['red, orange']
}

// How to access the data

console.log(fitBitData['totalMile'])
console.log(person['firstName'])
console.log(kitchenSink['isFunny'])

// another way to access the data as long as the key is a string

console.log(fitBitData.workoutsThisWeek)
console.log(person.lastName)
console.log(kitchenSink.favNum)

// Every Key (in this case numbers) is converted to a string

const years = {
    1999: 'Good',
    1989: 'Best'
}

console.log(years['1989'])
// console.log(years.1989') - This will return an error as . notation won't accept numbers


// Example of template literal

const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

// Here are four ways to create a result 

let fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`;
console.log(fullAddress)
let Address = `${restaurant["address"]}, ${restaurant["city"]}, ${restaurant["state"]} ${restaurant["zipcode"]}`;
console.log(Address)
let add = fullAddress = restaurant.address + ", " + restaurant.city + ", " + restaurant.state + " " + restaurant.zipcode;
console.log(add)
let full = restaurant["address"] + ", " + restaurant["city"] + ", " + restaurant["state"] + " " + restaurant["zipcode"];
console.log(full)