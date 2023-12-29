const marvel=["thor","iron man","spider man"]
const dc=["superman","flash","batman"]

// marvel.push(dc);
// console.log(marvel) //it will take whole array as single index in order 
// //to prove that array can hole multiple data 
// console.log(marvel[3][1])

// const x1=marvel.concat(dc) // it will hold the concatenate value in new array
// console.log(x1) 

// const all=[...marvel,...dc,...[1,2,3,4]] // spread operator 
// //it is easy to merge when there is more than two array
// console.log(all)

let x1=[1,2,3,[4,5,6],7,[1,2,[3,4,5]],8];
// to make all these into single array
//we use flat method which take one parameter 
// parameter tells to what depth you want to flat like here 
// depth is two because inside array there is another array then there is another array
//we can use infinity it will automatically check its depth
console.log(x1.flat(Infinity))

console.log(Array.isArray("Ragini")) // check is this an array or not
console.log(Array.from("Ragini"))// convert it into array
console.log(Array.isArray(1234))
console.log(Array.from(1234)) // if it will not make it then it will return empty array
console.log(Array.of(100,200,300))
