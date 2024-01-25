//JavaScript Execution Context
// 1----{}->global EC
// 2------- Function Execution context
// 3------- Eval Execution context

let val1=10;
let val2=5;
function addNum(num1,num2)
{
    let total=num1+num2;
    return total;
}
let result1=addNum(val1,val2);
let result2=addNum(10,2);


//Phases of execution of above code
// 1-Global Execution is compulsory and allocated under this
// 2-Memory Creation Phase Or Memory Phase
    // 2.1-val1->undefined
     // 2.2-val2->undefined
     //addNum->definition
     //result1->undefined
     //result2->undefined
// Execution Phase
   //val1=10
   //val2=5 
   //addNum is already executed  
   // result1->addNum->   >>>>>>>>>>>>New Block will be created that contains (new variable + execution phase)
                                        //  |
                                        //  |
                                        //  >>>>
    //Again memory phase and execution phase will created 
    //  //1-Memory Phase         2- Execution Phase
    //   val1=undefined          num1=10 
    //   val2=undefined          num2=5
    //   total=undefined         total=15
//return statement will be called and return the value to global function
//result1 =15;
//After this the block will be deleted 
//result2->addNum
//Again new block will be created and above process will repeat
//result2=12;
