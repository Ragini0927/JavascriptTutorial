const x1="Ragini"
console.log(x1.length)


// console.log(x1.toUpperCase())
// console.log(`Hi my name is ${x1} and my surname is Singh`)

const x2=new String("Ragini Singh")
// console.log(x2)
// console.log(typeof x2)
// console.log(x2.substring(0,4)) // Give the substring  starting from 0 and ending at 4
// console.log(x2.substring(-1,4)) // give the substring starting from 0
// console.log(x2.toLocaleUpperCase())
// console.log(x2.slice(0,4))


console.log(x2.slice(0,4))
console.log(x2)
console.log(x2.includes("Singh"))

let x3=x2.slice(-7,-3)
console.log(x3)

const s1="2+2"
const s2= new String("2+2")
console.log(eval(s1))
console.log(eval(s2))

//visit this website to read more about string
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
