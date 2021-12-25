const fs = require("fs");
// fs.writeFile("Async.txt ","today is awesome day");
//TypeError [ERR_INVALID_CALLBACK]: Callback must be a function. Received undefined
// call back is must 

// while giving file name sapce also matter
//"Async.txt" and "Async.txt "-- both are different 
// it will create two new file
fs.writeFile("Async.txt","today is awesome day",
(err)=>{
    console.log("file is created");
    console.log(err)
    // o/p->file is created
    // null
});
fs.appendFile("Async.txt"," asynchronous file system",
(err)=>{
    console.log("task completed");
    console.log(err);
})

fs.readFile("Async.txt",(err,data)=>{
     console.log(data);
    //  <Buffer 74 6f 64 61 79 20 69 73 20 61 77 65 73 6f 6d 65 20 64 61 79>
})
fs.readFile("Async.txt","utf-8",(err,data)=>{
     console.log("utf-8 ",data);
      //utf-8 today is awesome day asynchronous file system
})