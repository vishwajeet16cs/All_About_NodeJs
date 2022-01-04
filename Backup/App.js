//ES 5 - notation
const express=require("express")
const dotenv = require('dotenv');
const app=express();
dotenv.config({path:'./MongoDb/config/config.env'})
/* app.post("/",(req,res)=>{
    res.send("user register successfully")
}) */
app.get("/",(req,res)=>{
    res.send(`<h1>hello to main page</h1>`)
})
      app.listen(process.env.port,(err)=>{
          console.log(process.env.port);
      if(err) throw err;
      console.log("server is running ....")

  })
  /* 
   how to read Application configuration env variables.
   1. insatll dotenv 
   npm i dotenv
   3. provide your configuration path.
   dotenv  
  */