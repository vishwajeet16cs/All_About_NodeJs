// the path module provides utilites for working with file and directory paths
// const path=require('path');
const path=require('path');
console.log(path.dirname("C:/Users/vishw/OneDrive/Desktop/Pro stack/NodeJs/CoreModules/PathModule/PathModule.js"))
//C:\Users\vishw\OneDrive\Desktop\Pro stack\NodeJs\CoreModules\PathModule


console.log("extName -",path.extname("C:/Users/vishw/OneDrive/Desktop/Pro stack/NodeJs/CoreModules/PathModule/PathModule.js"))
//extName - .js
console.log("hello check")
console.log("FileName -",path.basename("C:/Users/vishw/OneDrive/Desktop/Pro stack/NodeJs/CoreModules/PathModule/PathModule.js"))//PathModule.js
console.log("all thing -",path.parse("C:/Users/vishw/OneDrive/Desktop/Pro stack/NodeJs/CoreModules/PathModule/PathModule.js"))
// path.parse(path) mthod return an object whose properties represent significant element of the path.
// Trailling directory separators are ignored,see path.sep.
// output
/* all thing - {  root: 'C:/',
dir: 'C:/Users/vishw/OneDrive/Desktop/Pro stack/NodeJs/CoreModules/PathModule',
base: 'PathModule.js',
ext: '.js',
name: 'PathModule'
} */

const myPath=path.parse("C:/Users/vishw/OneDrive/Desktop/Pro stack/NodeJs/CoreModules/PathModule/PathModule.js")
console.log("name -",myPath.name)//name - PathModule