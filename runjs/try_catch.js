// Try catch are statements to catch errors
// prevent the code not running



try {
    hello.toUpperCase()
} catch {
    console.log('error');
} 
 console.log('it still works')



 function yell(msg) {
    try {
    console.log(msg.toUpperCase().repeat(3));
    console.log(msg.toUpperCase());
    } catch (e) { // e shows the error message
        console.log(e);
        console.log('please enter a string');
    }
 }
 yell('hello')  
 yell(1)
