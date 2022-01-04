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
const fs=require("fs");
// const { mkdir } = require("fs/promises");

//--------------------------------------------
// 1>  create a folder
// fs.mkdir("newFlolder",(err)=>{
//     console.log("folder created")
// })
// if file is already created it will throw an error
// if file already exist [Error: EEXIST: file already exists, mkdir


//-------------------------------------------------------
// 2> Create a file in it named bio.txt and data into it.
// fs.writeFile("newFlolder/bio.txt","new created file we are fidding the data ",
// (err)=>{
//     console.log("data have been pushed in to the respective file")
// })

//---------------------------------------------------------------

// fs.appendFile("./newFlolder/bio.txt"," new data is added to the bio.txt without over writing previous one",()=>{
//     console.log("file data appended")
// })

//-------------------------------------------------
// > to read the data

// fs.readFile("./newFlolder/bio.txt","utf-8",
// (err,data)=>{
//     console.log(data)
// })

//----------------------------------------------------
// >rename the bio --to-- mybio

// fs.rename("./newFlolder/bio.txt", "./newFlolder/mybio.txt",()=>{
//     console.log("file name change")
// })
//-----------------------------------------------

// > to delete the file

// fs.unlink("path",()=>{
//     console.log("file have been deleted")
// })

//-----------------------------------

//> to delete folder
// fs.rmdit("folder name with path",(err)=>{
//     console.log("folder have been removed");
// })