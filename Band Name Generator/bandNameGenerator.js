import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/generator",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.post("/generator",(req,res)=>{
    console.log(req.body);
    const cricketer = req.body.CricketerName;
    const hero = req.body.HeroName;
    const name = cricketer+hero;
    res.send(`<h1>Your Band Name</h1><h2>${name}</h2>`);
});

app.listen(port,()=>{
    console.log(`Hey buddy ! I'm in port ${port}.`);
});