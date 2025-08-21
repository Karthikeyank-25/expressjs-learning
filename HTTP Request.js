// HTTP Request :
// HTTP VOCAB :
//          There are 'FIVE IMPORTANT WORDS' to operate the HTTP Requests.
//                  - GET [Requests the resources]
//                  - POST [Sending the resources]
//                  - PUT [Replace the resources]
//                  - PATCH [Patchup the resources]
//                  - DELETE [Delete the resources]

// Example :

import express from "express";
const app = express();

app.get("/",(req,res)=>{        // Request from the user to locate the endpoint '/' and for that request the response
    res.send("Hi Buddy");
});

// Endpoints will locate the request from users

app.get("/about",(req,res)=>{        
    res.send("<P>I'm Karthi</p>");
});

app.get("/Karthi",(req,res)=>{        
    res.send("<h2>Google Future Employee!</h2>");
});

app.get("/contact",(req,res)=>{       
    res.send("6383744352");
});

app.listen(3000,()=>{
    console.log("Hey Buddy!!");
});
