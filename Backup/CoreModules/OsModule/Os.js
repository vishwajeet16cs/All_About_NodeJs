// os is used to now about os system like os name, os type,hostname etc.
const os= require('os');
 console.log(os.arch());//x 64
 const freeMemory = os.freemem();

 console.log(`${freeMemory/1024/1024/1024}`);//1088913408
 
 const totalMemory = os.totalmem();//7.744907379150391

 console.log(`${totalMemory/1024/1024/1024}`);//1.3192062377929688
console.log(os.hostname());//DESKTOP-LI9LU0L

console.log(os.platform());//win32
console.log(os.tmpdir());//C:\Users\vishw\AppData\Local\Temp
console.log(os.type());//Windows_NT