// const coding=["cpp","c","java","js","python"]   

// const value=coding.forEach((item)=>{
//    console.log(item); 
//    return item;
// })
// //for each does not return anything
//console.log(value);

// filter return the value 
//const myNum=[1,2,3,4,5,6,7,8,9,0] // if we write the condition without curly braces it will implicitly return the value of num
//const neNum= myNum.filter((num)=> num>4 )
//OR
// const neNum= myNum.filter((num)=>{
//     return num>4
// })
// console.log(neNum)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const user=books.filter((num)=> num.title=="Book One")
// console.log(user);


//another function is known as map is used instead of for each;
const myNum=[1,2,3,4,5,6,7,8,9,0] 
//const newNum=myNum.map((num)=>{return num+10})

//chaining
const newN=myNum
               .map((num)=>num+10)
                .map((num)=>num+1)
console.log(newN)



