const http = require("http");
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        fs.readFile(path.join(__dirname,"views","index.html"),"utf8",(err,data)=>{
            if(err) throw err;
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(data);
        });
       
    }
    if(req.url==='/contact'){
        fs.readFile(path.join(__dirname,"views","contact.html"),"utf8",(err,data)=>{
            if(err) throw err;
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(data);
        });
       
    }
   
});

const port = process.env.PORT || 3000;
server.listen(port,()=>console.log(`server is ruunig on port number ${port}`));