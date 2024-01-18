// const tinderUser=new Object(); //Singleton Object
// console.log(tinderUser);
const tinderUser={}; //Literal
tinderUser.id="123abc";
tinderUser.name="Ragini";
tinderUser.isLoggedIn=false;
console.log(tinderUser)

const regularUser={
   email: "Raginisingh@xyz",
   fileName: {
    userFullName: {
      firstName: "Ragini",
      lastName: "Singh"
    }
   }  
}
//console.log(regularUser.fileName.userFullName.firstName)
//if value does not exist then we use question mark
const obj1= {1:"a",2:"b"}
const obj2= {3:"a",4:"b"}
//const obj3={obj1,obj2} //obj3 contains two element obj1 and obj2 
//const obj3=Object.assign({}, obj1,obj2) this will assign all the value into obj1
//const obj3=Object.assign(obj1,obj2) // this will assign all the value into empty object
const obj3={...obj1,...obj2}
console.log(obj3);

//array of object
const arrObj=[
    {
      id:1,
      name:"Ragini"
    },
    {

    },
    {

    }
]
//This can be accessed by dot operator
console.log(arrObj[0].id)

console.log(tinderUser);
//this will give all the key value in the form of an array and we can  perform various operation
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
//this will give all the value key value pair int he form of array
console.log(Object.entries(tinderUser))
//this will check if the array is having  that value or not
console.log(tinderUser.hasOwnProperty('isLoggedIn'))