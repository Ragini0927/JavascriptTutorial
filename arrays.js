//Array

const myArr=[0,1,2,3,4];
const myHeroes=["batman","iron man"];
// console.log(myArr[0])
// console.log(myArr.length)

//Array Methods
// myArr.push(6)
// myArr.push(7)
// console.log(myArr)
// myArr.pop()
// console.log(myArr)

// myArr.unshift(9) //add in the beginning of the array but it is a costly operation
// console.log(myArr)
// myArr.shift() // remove from the beginning of the array
// console.log(myArr);
//  console.log(myArr.includes(1));
//  console.log(myArr.indexOf(3));

//  const neArr=myArr.join() // copy the array into two array but data type will be string
//  //convert into string
//  console.log(neArr)
//  console.log(typeof neArr)

//slice ,splice
console.log("A",myArr)
const my1=myArr.slice(1,2) //slice print the sliced part but does not include end range
console.log(my1);// it does not manipulate the original array
console.log("B",myArr)
const my2=myArr.splice(1,2) // it includes the range also 
console.log(my2) //it manipulate the original array and remove the spliced part from the array
console.log("C",myArr)