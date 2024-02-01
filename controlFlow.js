//if

// const isUserLoggedIn=true;
// if(isUserLoggedIn){
//  // Execute if block
// }
//  // <,>,<=,>=,==,!=,===,!==
// //===  => It also check for data types as well

// const temperature=40;
// if(temperature<50)
// {
//     console.log("Temperature is less than 50");
// }
// else
// {
//     console.log("Temperature is greater than 50");
// }
 //else if can also be used just like another programming language
//Shorthand Notation
//const balance=1000
//if(balance>500) console.log("test"),console.log("test2"); not a good practice

const isUserLoggedIn=true;
const debitCard=true;
loggedInFromGoogle=false;
if(isUserLoggedIn && debitCard )
{
    console.log("Allow to buy course");
}
if(isUserLoggedIn || loggedInFromGoogle){
    console.log("User Logged In");
}