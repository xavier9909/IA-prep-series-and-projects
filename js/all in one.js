// // closures
// function sum(a){ 
//      let b = 7
//      return function(){
//         console.log(a+b);
//      }
// }

// let b = sum(4)
// //b()

// //constructor function


// function person(a,b) {
//     this.b = b
//     this.a = a
//     this.bb = function () {
//         return a+b
//     }
    
// }

// let p1 = new person(3,4)
// console.log(p1.bb());

// // debounce 
// let id 
// let count = 0
// const getdata =()=>{
//     console.log(count++);
// }

// const bebounce  = (fn,time)=>{
//   return function(){  if(id){clearTimeout(id)}

//        let id  =   setTimeout(()=>{
//             fn()
//          },time)
// }}
// let main = bebounce(getdata,1000)


// //throttle
// let bool = true
// const expensive = ()=>{
//     console.log(count++);
// }
// const throttle = (fn,time)=>{
//   return function(){  if(bool){
//         fn()
//         bool = false
//     }
//          setTimeout(()=>{
//                bool = true
//          },time)
// }}


// //  promises

// let promise = new Promise((res,rej)=>{
//     res("ggggg")
// })
// promise.then((e)=>{
//     console.log(e);
// })


const cr = require("crypto")
const cipher = cr.createCipher("aes192","hey")
let en = ""
cipher.on("end",()=>{
    console.log(en);
})
cipher.write("hey")
cipher.end()