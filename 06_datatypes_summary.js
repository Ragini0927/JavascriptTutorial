//  #Primitive 
// 7 types: String, Number, Boolean, null, undefined,symbol,BigInt

// ######## Javascript is dynamically typed  Language

// #Reference type (Non Primitive)
// Array ,Objects ,Function

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id==anotherId)

const bigNumber=1234567894
console.log(bigNumber)

const heroes=["shakitman","batman","doga" ];
let myobj={name:"Ragini",
           age:22,}
console.log(heroes[0])           
const solve=Function()
{
    console.log("Hello World")
}
solve();