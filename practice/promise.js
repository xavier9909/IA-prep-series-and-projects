let p  = new Promise((resolve,rejct)=>{
    resolve("success")
    rejct("ggg")
})
p.then((e)=>{
    console.log(e);
}).catch((r)=>{
console.log(r);
})
let p2  = new Promise((resolve,rejct)=>{
    resolve(2)
    rejct("ggg")
})
let p3  = new Promise((resolve,rejct)=>{
  //  resolve(3)
  setTimeout(()=>{
    resolve(3)
  },1000)
    //rejct("ggg")
})
let p4  = new Promise((resolve,rejct)=>{
    resolve(4)
    rejct("ggg")
})
let p5  = new Promise((resolve,rejct)=>{
    resolve(5)
    rejct("ggg")
})


Promise.allSettled(
    [p3,p4]).then((mes)=>{
        console.log(mes);
    }).catch((e)=>{
        console.log(e);
    })
Promise.race( [p3,p4]).then((mes)=>{
    console.log(mes);
}).catch((e)=>{
    console.log(e);
})
Promise.all([p3,p4]).then((m)=>{
console.log(m);
})

