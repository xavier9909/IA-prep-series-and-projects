// let obj = {
//  Name : "meera",
//    method : function (n) {
//             return this
//    },
// method2 : (name)=>{
//     console.log(this);
//     return this;
// }
// }

// console.log(obj.method("hhh"));
// console.log(obj.method2("hhelo"));

let  p =  new Promise((resolve,reject)=>{
   resolve("s")
   reject("e")


}).then((r)=>{
console.log(r);
}).catch((e)=>{
console.log(e);
})