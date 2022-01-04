 //REPL
 // 1: js Expression
 // 2: use Variables
 // 3: Multiline code
 // 4: Use (_) to get the last result
 // 5: We can use editor mode

//  const name="vishwajeet";
//  console.log(name);

const fs = require("fs");
// console.log(fs);
fs.writeFileSync("data.txt","hello how are you");
// if file is there then it will fid the data 
// else it will creat the file and fid the data
// it will create new file  name data.txt -- and write -- hello how are you
fs.writeFileSync("data.txt"," how are you");
// it will over write the previous data of the file
fs.writeFileSync("data.txt","this will over write previous one")
// fs.writeFileSync("newdata.txt","this will over write previous one")
