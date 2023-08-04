const express = require("express");
const app     = express();

app.get('/',(req,res)=>{
    res.send("Home");
});

app.get('/contact',(req,res)=>{
    res.send("this is contact page");
});

app.get('*',(req,res)=>{
    res.send("<h1>404</h1>");
});


const port = process.env.port|| 3000;
app.listen(3000,()=>console.log(`server running on port ${port}`));
