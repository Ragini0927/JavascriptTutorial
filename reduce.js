const array=[1,2,3,4]
// const sum=array.reduce(function (acc,curr){
//     console.log(`acc:${acc} and curr:${curr}`)
//     return acc+curr;
// },0)

const sum=array.reduce((acc,curr)=>acc+curr,0)
console.log(sum)
const shoppingCart=[
    {
        itemName: "js course",
        price: 3999
    },
    {
        itemName: "python course",
        price: 2999
    },
    {
        itemName: "Android course",
        price: 12999
    }
]
const total=shoppingCart.reduce((acc,curr)=>acc+curr.price,0)
console.log(total);