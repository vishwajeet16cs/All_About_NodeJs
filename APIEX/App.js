const express = require("express")
const app = express()
app.get("/",(req,res)=>{
    res.send(`<h1>Testing </h1>`)
})
app.get("/about",(req,res)=>{
    res.send("<h1>it's all about you</h1>")
})
app.get("/user",(req,res)=>{
   res.send("<h1>welcome to use page </h1>")
})
app.get("/user/login",(req,res)=>{
    res.send(`<h1>Login here</h1>`)
})
app.get("/user/registration",(req,res)=>{
    res.send("<h1> User Registration here ..</h1>")
})

app.listen(5000,(err)=>{
    if(err) throw err
    console.log(`surver running ... ${5000}`)
})