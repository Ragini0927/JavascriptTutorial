//singleton ->when we declare object as constructor 
//Object.create  ** Singleton
//object literals

const mySym=Symbol("key")

const jsUser={
    name:"Ragini",
    age:20,
    location: "Jaipur",
    "full name":"Ragini Singh",
    [mySym]:"mykey1", //correct way to the symbol as key in object in object
    email: "ragini@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}               
console.log(jsUser.email) //this is not a good way to access the object element
console.log(jsUser["name"]) //this is preferred in all cases
console.log(jsUser[mySym])
//Object.create //objet using constructor

jsUser.email="Raginisingh@microsoft.com" //to change the object value
console.log(jsUser["email"])

//When we want to freeze the object value 
//Object.freeze(jsUser);
jsUser.email="Raginisingh@amazon.com" 
console.log(jsUser)
jsUser.greeting=function()
{
    console.log("Hello Js User");
}
console.log(jsUser.greeting());
jsUser.greeting2=function()
{
     console.log(`hello, ${this.name}`);
}
console.log(jsUser.greeting2());

