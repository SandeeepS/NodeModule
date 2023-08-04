const express = require("express");
const app     = express();
const path = require("path");
const port = process.env.port || 3000;
app.use(express.static("views"));
/*app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"views","index.html"));
});

app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,"views","contact.html"));
});*/
//custom middleware
app.get('/contact',token,(req,res,next)=>{
    console.log("user looged");
    next();
},(req,res)=>{
    console.log("final middleware");
});

function token(req,res,next){
       console.log("loading");
       next();
}



app.listen(3000,()=>console.log(`server running on port ${port}`));
