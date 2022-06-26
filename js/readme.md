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



first_class function,first_order function , highrt_order function , uniry,currying function , pure function

first class function :{
ability to pass function as value called first class functions

}
first_order function : those who does not take function as arguments and also not return function 

higher_order function  = those function who take function as arguemnt and can also return function 

currying  = Currying means that the closure does not have to receive all of its arguments at once, but separately. I've found this useful metaphor around the internet: Think of currying as adding ingredients (arguments, or other spices) to a function one by one. You can drop some arguments now, and other arguments as you go

pure_functions = those function who give results which are predictable reliable an easy to test like adding two number we know what result it will give but on the other hand if your cll for api it can give ur desired data but also can return eror  as result this behaviour callred side effcts in react 


Side effects :  are not predictable because they are actions which are performed with the "outside world."

call back hell = 
This is a big issue caused by coding with complex nested callbacks. Here, each and every callback takes an argument that is a result of the previous callbacks. In this manner, The code structure looks like a pyramid, making it difficult to read and maintain. u can fix this via using promises

constructor functions :A constructor is a special function that creates and initializes an object instance of a class. In JavaScript, a constructor gets called when an object is created using the new keyword. The purpose of a constructor is to create a new object and set values for any existing object properties.



bubbling ,capturing(trickling ) ,premitive and not prmitive data types,prototypes,deboucing ,throttling,polyfills,async def in script tag,event delegation,promises,web storage,cookies ,async await,typeof(null,nan,undefined with defination),iife,non-boolean vlaues in js ,es6 what is added,diffrnce between let and object.freeze,diff in slice splice,memoistation,local storage,session storage


bubbling => event triggred by element first runs on it then parent then ancestors

capturing ==> event triggered by el will labled as target now fist ancetor handle will then parent thn target


primitive and non-p : So the fundamental difference between primitive and non-primitive is that primitive values are immutable and non-primitive values are mutable and Primitives are stored by value while Non-Primitive (objects) are stored by reference.

primitvie : string,number,bigint,boolean,undefined,symbol,null
 
 non-p : object
 typeof "hello" // "string"

typeof 0 // "number"

typeof 1n // "bigint"

typeof true // "boolean"

typeof undefined // "undefined"

typeof Symbol("id") // "symbol"

typeof {} // "object"

typeof null // "object"


Prototypes   = prtotypes are by default property that are associated with every object and functions 
prototypes are used to add properties and methods to a constructor function And objects inherit properties and methods from a prototype this also known as prototype inheritnace

function Person () {
    this.name = 'John',
    this.age = 23
}

const person = new Person();

// checking the prototype value
console.log(Person.prototype); // { ... }
Person.prototype.gender = 'male'; // will add this new vlaue to object


Debouncing and throttling = so when is user is triggring an event continuolsy we use debouncing to not call a function untill user not trigger a funcion in certain period like search bar if user is typing then we dont need trigger a function cll until it stop for like 300ms  but in throttling after calling a funcion we disable the functionality of triggering event for like 5 or 10 seconds like send otp feature after sneding one otp user can for some time before triggering new otp request 


debounce : {
       buttion onclick(magic())  click me

let count = 0
let getdata = ()=>{
console.log(++count)
}
let id ;
let debounce  = (fn,time)=>{

    return function(){
        if(id){
            clearInterval(id)
        }
    id =   setTimeout(()=>{
       fn()
    },1000)}
}

magic = debounce(getdata,1000)

}

throttle : {
let count = 0

let expensive  = ()=>{
    console.log("expensive "+" "count++)
}
let bool = true
let throttle = (fn,time)=>{
        return function(){
            if(bool){
                bool = flase
                fn()
                setTimeout(()=>{
                    bool = true
                },time)
            }
        }
}

let betterexpense = throttle(expensive,1000)

}



pollyfills : 





async and defer in script tag====> :
    so when browser loads html page its also load scripts(index.   js) after downloading it executes it then only process rest of the page simple fix for it is to paste the script bottom of the page but its no perfec way it show the content but also wait script for too load now we have two keywords for it async and defer if add defer in script tag 
    it will not block the entire page it start downloading  in background and process rest of the page but it aslo follow the order of scripts if you have two scipts and scond wll load first thn it will wait for the first script to load till event handlers also wait for it load now if you async its also same defer it will tell browser not wait start parallel downloading but async scripts are completely independent  they dont wait for each other to load like first come first serves



    event delegation ==>




    promises == >  promise is proxy for a for a value which is not known until its return some value this lets function behave as synchronus function not return vlaue immediately but it will wait for success or reject message 

    let mypromise = new Promise((res,rej)=>{res("success")rej("rej")})

    mypromise.then((res)=>{console.log(res)})
    .catch((rej)=>{console.log(rej)})


localstorage and session storage = web browser use some website data to store locally there are two type of storage local and session local storage in permanent storage until deleted but session storage persist until tab is not closed


cookies -  Cookies are small pieces of text sent to your browser by a website you visit. They help that website remember information about your visit, which can both make it easier to visit the site again and make the site more useful to you.


slice and splice  = slice given dta from given array to given indexes it always return new array but splice can add or remove data to given indexes


async and await ->