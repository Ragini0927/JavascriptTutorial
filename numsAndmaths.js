const score=400
 const balance=new Number(100)  //dynamic allocation

//  console.log(balance)
//  console.log(score)
//  console.log(balance.toString().length)
//  console.log(typeof balance)
//  console.log(balance.toFixed(2))
//  const otherNumber=23.8966
//  console.log(otherNumber.toPrecision(2))
//  const x=100000000
//  console.log(x.toLocaleString('en-IN'))

// console.log(balance.Max_Value)
// console.log(Math.PI)
// console.log(Math.abs(-876))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.2))
// console.log(Math.min(1,2,5,8,9))
// console.log(Math.max(77,56,1,0,9))

console.log(Math.random()) //gives random value between 0 and 1
console.log(Math.random()*10) //gives random value between 1 and 10
console.log((Math.random()*10)+1) // In case if 0 comes as random value

// If we want random value between min and max
const min=10
const max=20
console.log(Math.random()*(max-min+1)+min)
console.log(Math.floor(Math.random()*(max-min+1)+min))