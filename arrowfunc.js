const user={
    username:"Ragini",
    price:752,
    welcomeMessage:function()
    {
      console.log(`this is ${this.username}`);
      //console.log(this);
    }
}

// user.welcomeMessage();
// user.username="Shiven";
// user.welcomeMessage();
//console.log(this);
// function chai()
// {
//     let username="Ragini";
//     console.log(this); // many object
//     console.log(this.username) //undefined ->can not use this with function
// }
// chai();

// const chai=() =>{
//     let username="Ragini"
//     console.log(this.username) //gives undefined
// }
// chai();


//first way
const one=(num1,num2) =>{
    return num1+num2;
}

//2nd way
//const two=(num1,num2) => num1+num2;

//or
const two=(num1,num2)=>(num1+num2);


const three=() =>({username:"Ragini"})

console.log(one(3,4));
console.log(two(3,4));
console.log(three());
