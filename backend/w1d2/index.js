const express = require("express")
const app = express()
const user = require("./db.json")
app.use(express.json())
app.listen(8000,function () {
    console.log("working");
})
app.get("/",(req,res)=>{
    res.send({user})

})
app.post("/",(req,res)=>{
    const n = [...user,req.body]
       res.send(n)
})

app.patch("/:email",(req,res)=>{
    console.log(req.params);
  const n  = user.map((e)=>{

    if(req.params.email === e.email){
        return req.body
    }
    return user
  })
res.send(n)

})
app.delete("/:id",(req,res)=>{
const n  = user.filter(e =>req.params.id!=e.id)
res.send(n)
})