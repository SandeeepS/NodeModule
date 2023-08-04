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

app.get('*',(req,res)=>{
    res.send("<h1>404</h1>");
});



app.listen(3000,()=>console.log(`server running on port ${port}`));
