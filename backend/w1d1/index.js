let express  = require("express")
express = express()

 express.get("/",(req,res)=>{
    res.send("fdfdf")
 })
 express.listen(80,()=>{
    console.log("80");
 })