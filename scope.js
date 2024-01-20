let a=10;
const b=20;
var c=30; //

if(true){
    let a=10;
    const b=20;
    //var c=30;  
}

// console.log(a);//not print 
// console.log(b);// not print
// console.log(c);//it will print 30 because it does not follow scope
function one()
{
    const userName="Ragini"

    function two(){
        const website="youtube";
        console.log(userName);
    }
   // console.log(website) // out of scope
   two();
}
one();

//+++++++++++++++++++++++++++interesting +++++++++++++++++++++++++
console.log(addOne(5)); //this is function definition no error
function addOne(num)
{
    return num+1;

}

//console.log(addTwo);// Give error
const addTwo=function(num) // this function expression
{
    return num+2;
}
