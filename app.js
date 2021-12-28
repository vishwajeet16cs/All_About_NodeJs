//ES 5 - notation
const express=require("express")
// import express, { application } from "express";
const app=express();
/* API URL:localhost:5000/signup
Method: POST
Feild: Email,Password
Access Type: public
 */
app.post("/",(req,res)=>{
    //business logic to insert data
    res.send("user register successfully")
})
app.get("/",(req,res)=>{
    res.send(`<h1>hello to main page</h1>`)
})
  app.listen(5000,(err)=>{
      if(err) throw err;
      console.log("server is running ....")

  })