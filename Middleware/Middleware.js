// Middleware :
//          In Express.js, middleware is a function that runs between the request (from client) and the response (from server).
//              - Access request and response objects.
//              - Modify them if needed.
//              - Decide whether to pass control to the next middleware or stop there.

// body-parser [Middleware] :
//              - 'body-parser' is a middleware in Express.js used to parse the incoming request body before your handlers (routes) run.
//              - It lets you access req.body easily (otherwise request body will be undefined).
// Why we need it :
//              - When a client (like Postman, frontend, or cURL) sends data to the server:
//              - GET request → data usually goes in query params (req.query)
//              - POST / PUT request → data usually goes in body
//              - But Express doesn’t parse request body automatically, so we use body-parser.

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";


const __dirname =dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/login",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.post("/login",(req,res)=>{
    console.log(req.body);
    
});

app.listen(port,()=>{
    console.log("Hey Buddy I'm Running!");
});