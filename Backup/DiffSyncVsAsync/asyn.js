const fs = require("fs");
fs.writeFile("data.txt","diff b/w asyn and sync",
(err)=>{
    console.log("write file txt")
})
fs.readFile("data.txt","utf-8",
(err,data)=>{
    console.log("readFile clg")
    console.log("reading data from the file->",data)
})
// console.log("data from file",data)
console.log("after the data")
//code is executing async way