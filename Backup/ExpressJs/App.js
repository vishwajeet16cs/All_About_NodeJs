var express = require('express');    
var app = express()
/* 
    API URL: localhost:5000/
    Method:GET  
    Fields:No Required
    Access Type:public

*/
app.get("/",(req,res)=>{
    res.send("Root Request hello check")
})
/* 
    API URL: localhost:5000/user
    Method:GET  
    Fields:No Required
    Access Type:public

*/
app.get("/user",(req,res)=>{
    res.send("user data");
})
/* 
    API URL: localhost:5000/emp
    Method:GET  
    Fields:No Required
    Access Type:public

*/
app.get("/emp",(req,res)=>{
    res.send("emp data");
})
/* 
    API URL: localhost:5000/emp/detils  
    Method:GET  
    Fields:No Required
    Access Type:public

*/
app.get("/emp/details",(req,res)=>{
    res.send("detail is not here data");
})
/* 
    API URL: localhost:5000/
    Method:GET  
    Fields:No Required
    Access Type:public

*/
app.listen(5000,(err)=>{
    if(err) throw err
    console.log("server is running on port number: 500")
})