const userEmail="Ragin@ai";


if(userEmail){
    console.log("Got user Email");
} else{
    console.log("Don't have email");
}

//Falsy Value:
// 0,-0,BigInt,0n, "",null,undefined,NaN

//truthy value
//except falsy all the values are truthy value
// example: "0",'false'," ",[],{},function(){}

// to check the array as true or false
// if(arr.length()==0)
// {
//     //true;
// }

//to check empty object
// const emptyObj={}
// if(Object.keys(emptyObj).length()===0)
// {
//     console.log("Object is empty");
// }


//Nullish Coalescing Operator (??) :null undefined
//Made to deal with null and undefined 
let val1;
val1=5 ??10
console.log(val1); //5
//val1=null  ?? 10
//val1=undefined ?? 15 //15


//Ternary Operator
//condition ? true :false;
const a=10;
 a>5 ? console.log(true) :console.log(false) 

