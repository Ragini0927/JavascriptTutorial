// It started from the midnight january 1 1970,UTC 
//calculated in millisecond

let myDate=new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.group(myDate.toLocaleDateString());
// console.log(myDate.toLocaleDateString());
let date1=new Date(2023,0,12)
let date2=new Date(2023,0,23,5,3)
let date3=new Date("2023-01-14")
let date4=new Date("01-04-2023")
// console.log(date1);
// console.log(date2);
// console.log(date3);
// console.log(date4);
console.log(date4.toString())

let timeStamp = Date.now();// total time in millisecond from 1970
console.log(timeStamp);
console.log(date4.getTime())

let newDate=new Date();
console.log(newDate.getFullYear())

newDate.toLocaleString('default', {
    weekday:"long",
})
console.log(newDate)

