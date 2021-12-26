// How to generate tocken
const jwt = require('jsonwebtoken');
let user={
    name:"vishwajeet",
    email:"vishwajeet@gmail.com",
    password:"123456"
}

// token generation
// let token = jwt.sign(1,2,3)

let token = jwt.sign(user,"keyTOIncript",(err,token)=>{
    if(err) throw err;
    console.log(token)
})
token = jwt.sign(user,"TOIncript",(err,token)=>{
    if(err) throw err;
    console.log(token)
})