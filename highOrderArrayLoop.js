// for of 

// ["","",""]
// [{},{},{}]

// const arr=[1,2,3,4,5]
// for (const num of arr) {
//    console.log(num) 
// }
// const greetings="Hello World";
// for (const num of greeting) {
//     console.log(num)
// }

//Maps
const map=new Map();
map.set('IN',"India");
map.set('USA',"United State Of America")

//console.log(map);
for(const [num,num1] of map)
{
    console.log(num,"=>",num1)   
}

//*****can not use for of to iterate myobject *****/
// const myObj={
//     val1:1,
//     val2:2
// }
// for (const [key,val] of myObj) {
//     console.log(key,":",val)
// }

////////////FOR IN//////////////////
//It will give key and can be used with array also
const myObj={
    js:"Javascript",
    cpp:'c++',
    rb: 'Ruby'
}
for (const key in myObj) {
    console.log(`Key=${key} and value=${myObj[key]}`)
    }


//***************For Each Loop***********
const coding=["cpp","c","java","js","python"]    
// coding.forEach(function (val){
//     console.log(val)
// })
// coding.forEach((val)=>{
//     console.log(val)
// })
// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)

// coding.forEach((item,ind,arr)=>
// {
//     console.log(item,ind,arr);
// })
const myCoding=[
    {
        language:"javascript",
        languageFile:"js"
    },
    {
        language:"java",
        languageFile:".java"
    }
]
myCoding.forEach((item) => {
    console.log(item.language)
});