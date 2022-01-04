const fs = require("fs");
const http = require("http");
const server = http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url=="/")
    {
        res.end("hello welcome from server sides");
    }
    else if(req.url=="/about"){
        // req.end(`<h1>this is about page</h1>`) 
        res.end(`<h1>this is about page</h1>`) 
    }
    else if(req.url=="/contact"){
        // req.end(`<h1>this is about page</h1>`) 
        res.write(`<h1>this is contact page</h1>`);// data of responce
        res.end();// sending responce
    }
    else if(req.url=="/userapi"){
        fs.readFile("UserApi.json","utf-8",(err,data)=>{
            res.writeHead(200,{"content-type":"application/json"})
            res.write(data);// data of responce
            res.end();// sending responce
            // console.log(data)
        })
    }
    else{ 
        res.writeHead(404,{"Content-type":"text/html"});// forpage not find -send reaponce status 404(error)
        //can check in console the error 404 (not found)
        res.end(`<h1>404 Error page Not found</h1>`) 
    }
});
server.listen(8000,"127.0.0.1",()=>{
    console.log("server running....")
})