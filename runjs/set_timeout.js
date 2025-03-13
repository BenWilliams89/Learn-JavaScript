// Set Timeout
// delay execution of a function = scheduling

setTimeout(() => {
    console.log('heeeello Ben');
    
}, 2000)

// i'll know wait a further two seconds before adding the next console.log

setTimeout(() => {
    console.log('Hello Ben');
    
    setTimeout(function(){
        console.log('Hey Emily');
    }, 2000);

}, 5000); // This takes the whole second timeout to take 5 seconds



