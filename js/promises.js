let a;
let mypromise = new Promise((res,rej)=>{
if(a){
    res("success")
}
else {rej("reject")}

})


mypromise.then((message)=>{
    console.log(message);
}).catch((error)=>{console.log(error);})


