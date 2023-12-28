// Stack and Heap Memory

//stack => It is used is the case of Primitive data type
 
let name= "Ragini" // These values get memory in the stack 
let name1=name; // copy of name is share to the name1
name1="Singh"
console.log(name)
console.log(name1)

let u1={ //these are stored is heap 
    n1:"Ragini",
    email:"myselfraginisingh@gmail.com"
}
let u2=u1 // same memory address is shared not copy
u2.n1="Singh" //changes will be reflected in both
console.log(u1.n1)
console.log(u2.n1)
