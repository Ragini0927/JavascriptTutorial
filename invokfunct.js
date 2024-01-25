//Immediately invoked function expression (IIFE)

//This is used because sometimes there is pollution due to global variable
(function chai(num)
{
    console.log(`this is immediately invoked function ${num}`)
})("Ragini"); // semi colon must use if below there is another IIFE

//Arrow Function Example
( () =>{
    console.log("Welcome")
})()