//function definition
// function sayMyName()
// {
// console.log("R");
// console.log("A");
// console.log("G");
// console.log("I");
// console.log("N");
// console.log("I");
// }

//function declaration
// sayMyName();

function add(a,b) // a and b are parameters
{
    //console.log(a+b);
    return a+b;
}
const c=add(3,4); // 3 and 4 are arguments
console.log(c);

function loginUser(username="sam") // to give the default value
{
    if(!username)
    {
        console.log("Please Enter a username")
        return ''
    }
    return `${username} just logged in`
}
console.log(loginUser("Ragini"));
console.log(loginUser());
