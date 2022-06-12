everything is js happen in execution context

execution contxt have two context 
    1 . memory component :{ ---> second name = variable environment
        this stores data in key value pair  
            key : value,
            fn: {....}
    }
    JS - SYNCHRONUS AND SINGLE THREADED(ONE LINE AT  TIME IN SPECIFIC MANNER)
    2. code component ---->>> second name = thread of execution
          {
            where all code executes
          }




when js executes a code first it allocate memory to all the var and functions and  global execution stack created then it push to the call
stack and one by one its start executing  function on each a time execution stack created and push to the call stack after running it will be removed from the stack 

hoisting - when js start executing code it goes through two phases memmory allocation and the main execution in memory allocation js make a list of all var and function assign vlaues to like var with undefined and functions with their complete code with as value

execution = when js start execution it will create a gloabal context containg all  var and function for each function or call even log it will create a seprate execution context created inside callstack


js create a global object does not matter if a single line of code written or not in browser its = window{}
 and everything will go inside this object  

 scope chain n lexical environment -  scope chains means lexical environments of function means hierarchy of function which is which function or variable present inside which which function it makes a function lexical environment and global scope is always a lexical environment for its child function 


temporal dead zone  = when you use let const they hoisted in seprate onject called script not global onject the time hoisting to giving let and const proper value valled temporal dead zone  

syntax error  - this error come when you do duplicate declaration of let and const
reference error - when that particular variable not present inside the scope called reference error


Block also known as compund statement : {
we group multiple statments  together and we them where js aspect only one statement

example if(true) console.log("gg") ----> if only expect one statment 

if(true){
    a =5
    console.log(a) ---> now in this we have given if statement a block to execute this what block is

}

block scopr - variable and function that are only accessible inside scope called block scope
}



closures  = closures are functions bundled together in their lexical environment

closures can be used to hide data and data encapsulation but it will also increase memory consumption
in js engine we a thing called garbbage collector it check for those values which are not needed so 
it pull those values outisde of memomry but in closures  varaible is referring to function it cant take it out it will increase memory

function statement ;{
a()
b()
function a(){
    console.log("called")
}
}
function expression : {

let b = function (){
    console.log("called")
}
}

diffrence between function expression and function statment is way writing and hoisting function a will give out when called but function b will gie eror like b in not a function


value passed when calling function called arguements and when receiving those vlaues called parameters

first class function :{
ability to pass function as value called first class functions

}

event loop ---> js is synchronus programming language but sometimes we need to do asynchronus function to do some task in that event loop comes into  the picture it takes callbacks and promises in new environment call web api environment when execution stack encount callback or promise it will pop the function send to web api for keep runnig that function in background when timer gets over it will push the function to the call back queue and call back queue keep looking for execution context to get empty after execution context done doing execution and its get empty callback push the function inside to execution stack and exextion stack will run  it and gives the output
