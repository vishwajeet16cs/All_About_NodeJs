// create server - http: node js core module
const http= require("http");
const server = http.createServer((req,resp)=>{
    resp.end(`<h1>hello, http server</h1>
    <h1>hello,jjwjs http server</h1>
    <h1>hello, http server</h1>
    <h1>hello, http server</h1>`);
})
server.listen(8000,(err)=>{
    if(err) throw err
    console.log(" server runing .........")
})
// here we we are done some change - it not reflect in server label
// after doing change we have to stop and restart the serve again 
// above proble can be over come by NodeMon
/* NODEMON--> The nodemon Module is a module that develop node. js 
based applications by automatically restarting 
the node application when file changes in the directory are detected. 
Nodemon does not require any change in the original code and method of development. */