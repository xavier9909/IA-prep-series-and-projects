
//const fetch = require("node-fetch")
// console.log("heelo");

//import  fetch  from "node-fetch";
// setTimeout(()=>{
//     console.log("end");
// },)



// console.log("bye");



// function x() {
//     let a = 5
//    return function y() {
//         console.log(a);
//     }
// }

// let z = x()
// z()



fetch("http://www.xyz.com").then((r)=>{
return console.log(r.json());
}).then((e)=>{
  return  console.log(e);
})