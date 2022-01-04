const fs = require("fs");
const emp={
    Firstname:"vishwajeet",
    LastName:"Singh",
    roll:129,
    location:"Bangalore"
}

/* 1: conver to JSON==>done
2: add to diff File
3: readfile
4: convet back to objData
5: show at console */
 const jsonData=JSON.stringify(emp);

fs.writeFile("json1.json",jsonData,(err)=>{
    console.log("done")
})

fs.readFile("json1.json","utf-8",(err,data)=>{
    const orgData = JSON.parse(data)
    console.log(data)
    console.log(orgData)
})
// const objData=JSON.parse(data);
// console.log(objData)