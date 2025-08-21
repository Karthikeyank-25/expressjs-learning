// Creating our 1st Server with Express :

// 1. Create Directory :
//          mkdir "Express File"        [The directory created]

// 2. Create File within Directory :
//          touch "First Server.js"     [The file created within Directory]

// 3. Initiate npm in file :
//          npm init -y                 [The npm is initiated in the file]

// 4. Install Express in Node :
//          npm install express         [Express is installed in the npm]

// 5. Creating a Server :
//          The server is created by importing express package.
            import express from "express";
            const app = express();
            app.listen(3000,()=>{
                console.log("I'm running!!");
            })

// 6. Starting the server :
//          node firstServer.js

// To check the port list of local computer :
//          netstat -ano | findstr "LISTENING"          [This command used to show the port already used in our computer]