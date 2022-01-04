const fs = require("fs");
fs.writeFileSync("syncData.txt","diff b/w asyn and sync")
const data =fs.readFileSync("SyncData.txt","utf-8")
console.log(data)
console.log("after the data")