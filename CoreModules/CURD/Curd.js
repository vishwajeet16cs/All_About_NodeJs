// 1 create a folder named it demoFolder
// > mxdir newFileName--> will create one folder
// 2 Create a file in it named bio.txt and data into it.
// >type nul > fileName.extension--> to create new file
// 3 Add more data into the file at the end of the existing data.
// >const fs = require("fs");
// >fs.appendFileSync("newFile.txt","new thing is added to the file without over writing previous one");
// 4 read the data without getting the buffer data at first.
// file encoding
// 5 rename the file name to mybio.txt\
// 6 now delete both the file and the folder

//-----------------------------------
//  CURD
// Create,Update,Read,Delete
// 1 Ceate a folder
const fs = require('fs');
// fs.mkdirSync("NewFolder");
// not run this command twise it will thro an erro-->Error: EEXIST: file already exists, mkdir 'NewFolder'
//run code --> will create newfolder name NewFolder


//---------------------------------
// 2 create a file with name bio.txt
// fs.writeFileSync("NewFolder/bio.txt","my name is vishwajeet singh");

// file path where u wnat to create and "data yu want to fid in to the data"

// fs.writeFileSync("NewFolder/bio.txt","my name is vishwajeet kumar singh");
// it will over write previous one 
//my name is vishwajeet singh --to--my name is vishwajeet kumar singh
fs.appendFileSync("NewFolder/bio.txt","And I Love Cricket")
//my name is vishwajeet kumar singhAnd + I Love CricketAnd I Love Cricket
// previous data in file                + new added data  from above command

//-------------------------------------------------
// read the data without buffer
const data = fs.readFileSync("NewFolder/bio.txt");
console.log(data)
// above command will read the data from the given file
//<Buffer 6d 79 20 6e 61 6d 65 20 69 73 20 76 69 73 68 77 61 6a 65 65 74 20 6b 75 6d 61 72 20 73 69 6e 67 68 41 6e 64 20 49 20 4c 6f 76 65 20 43 72 69 63 6b 65 ... 37 more bytes>
// but data is in buffer formate
// if no encoding is specified, then the raw buffre if returned
const dataUtf = fs.readFileSync("NewFolder/bio.txt","utf-8");
console.log(dataUtf)
//o/p-->my name is vishwajeet kumar singhAnd I Love CricketAnd I Love CricketAnd I Love CricketAnd I Love Cricket
//using Utf-8 we can avoid buffer problem

//------------------------------------------------
//reName file name--bio.txt--to--mybio.txt
// fs.renameSync("old-file-path","new-file-name-and-path")
fs.renameSync("NewFolder/bio.txt","NewFolder/mybio.txt")
//-------------------------------------------

//6 now delete both the file and the folder
// fs.mkdirSync("FileToDelete");
// fs.writeFileSync("FileToDelete/newfile.txt","creating fodelete");

// fs.unlinkSync("FileToDelete/newfile.txt");
//file have been deleted
fs.rmdirSync("FileToDelete");
// deleted -- FileToDeleted