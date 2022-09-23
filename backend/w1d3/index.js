const express = require("express")
const app  = express()
const users = require("./db.json")

const auth = ((req,res,next)=>{
    console.log("inside auth"+" " +req.method);
    next()
})
const auth2 = (permission)=>{
return (req,es,next)=>{
    console.log(permission);
next() 

}

}
app.listen(8000,()=>{
   return  console.log("working on port 8000");
})

app.get("/",(req,res)=>{
    res.send({users})

})
app.get("/users/:id",(req,res)=>{
    const n  = users.filter(e =>req.params.id!=e.id)
    res.send(n)
    })
app.post("/users",auth,auth2("editor"),(req,res)=>{

console.log("insise post");
res.send("posted")
})