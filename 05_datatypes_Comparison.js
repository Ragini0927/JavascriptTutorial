//  console.log(2>3)
//  console.log(2>=1)
//  console.log(2==1)
//  console.log(2!=1)

console.log("2">1) //true
console.log("02">1) //true

console.log(null>0) //false
console.log(null==0)  //false
console.log(null>=0)  //true

// this is because that an equality check==
//  and comparison ><>=<= work differently/
// Comparison convert null to number ,treating it as 0
// that's why nul>=0 is true and null>0 is false

//  === =>it will strictly check datatypes as well
 console.log("2"===2)