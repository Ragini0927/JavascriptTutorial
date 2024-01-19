// when you don't know how many argument is going to be add
function calculateCartPrice(...num)
{
    return num;
}
//console.log(calculateCartPrice(100,200,300));

const user={
    username:"Ragini",
    price:199
}
function handleObject(anyObject)
{
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
//    1st way handleObject(user);
//    2nd way 
handleObject({
    username:"Ragini",
    price:399
})

const newArray=[100,200,300];
function addArray(a)
{
    return a[0];
}
console.log(addArray(newArray))
