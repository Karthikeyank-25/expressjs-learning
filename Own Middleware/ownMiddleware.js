// Own Middlewre :

import express from "express";

const app = express();
const port = 3000;
// Building Middleware :
function ownBuilt(req,res,next){
    console.log("Method : ",req.method);
    console.log("URL : ",req.url);
    next();
}

app.use(ownBuilt);

app.get("/about",(req,res)=>{
    res.send("HI!!");
});

app.listen(port,()=>{
    console.log("Running Buddy!");
});