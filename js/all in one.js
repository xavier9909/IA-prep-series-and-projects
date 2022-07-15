//debounce
let count = 0
let getdata = ()=>{
console.log(++count);
}
let id ;
let debounce = (fn,time)=>{
         return function () {
           if(id){
            clearInterval(id)
           }
        id =     setTimeout(() => {
                fn()
            }, time);
         }
}


let magic = debounce(getdata,1000)



//throttle

let count2 = 0
const exp_function = ()=>{

  console.log(count2++);
  
  }
let throttle = true
let throttle_function = (fn,time)=>{
  return function () {
        if(throttle){
          fn()
          throttle = false
          setTimeout(() => {
              throttle = true
          }, time);
        }
  }
}

let throttleit = throttle_function(exp_function,1000)



// currying

function sum1(a) {
    return function (b) {
        if(b){
            return sum1(a+b)
        }
        else{
            return a
        }
    }
    
}
//console.log(sum1(1)(1)(1)(1)());
let sum2 = a=>b=> b? sum2(a+b):a
//console.log(sum2(1)(1)(1)(1)());


// promise
let p1 = new Promise((res,rej)=>{
        res("efefefef")
})
// p1.then((m)=>{
//     console.log(m);
// })
let p2 = new Promise((res,rej)=>{
    res("efefefef")
})

//Promise.allSettled([p1,p2]).then((m)=>{console.log(m);})
//allsettled -- will give all the result for promises becasue they are dependent on each other
// all === if use all it will be run as dependent function if one function give it will rejct all'
// race == runs only fastest promise


// constructor function 

function user(n) {
    this.n = n
    this.add = function () {
        return n+10;
    }
}
let usr  = new user(19)
console.log(usr.add());

// call back

let callback = ()=>{
    console.log("hello");
}

let invoke = (call)=>{
       call()
}
invoke(callback)

// asyn await

let p3 = new Promise((res,rej)=>{
         
})










