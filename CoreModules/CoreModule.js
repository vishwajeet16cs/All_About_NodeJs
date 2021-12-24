// const { request } = require("http");

// const fs = require("fs")
const fs = require("fs");
fs.appendFileSync("newFile.txt","new thing is added to the file without over writing previous one");
fs.writeFileSync("newFile.txt","this will over write previous one")
fs.appendFileSync("data.txt","  ---->new thing is added to the file without over writing previous one");
// to read data from file


//Node.js includes an additional data type called buffer
//(not available in browser's JavaScript).
//Buffer is mainly used to store binary data,
//while reading from a file or receiving packets over the network. 
const buf_data=fs.readFileSync("data.txt");
console.log(buf_data);
//o/p--><Buffer 74 68 69 73 20 77 69 6c 6c 20 6f 76 65 72 20 77 72 69 74 65 20 70 72 65 76 69 6f 75 73 20 6f 6e 65 6e 65 77 20 74 68 69 6e 67 20 69 73 20 61 64 64 65 ... 537 more bytes>
const readdatastr=buf_data.toString();
console.log(readdatastr);

// to rename file
fs.renameSync("data.txt","newNameData.txt")
// file name scange from DataTransfer.txt to  newNameData.txt