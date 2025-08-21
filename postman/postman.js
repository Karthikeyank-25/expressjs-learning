// Postman :
//          It’s an API client tool that developers use to send requests to a server and see the responses.
//              - It lets you test APIs.
//              - Instead of writing a frontend to test your API, you can directly send GET, POST, PUT, DELETE, etc. requests to your Express server.
//              - It shows you the response data, status codes, and headers, making debugging easier.

// In Express :
//          - Without Postman → You would need to create a frontend or use [fetch()/axios] to test the API.
//          - With Postman → You just enter [http://localhost:3000/users], hit Send, and instantly see the result.

// Request in Express :

            app.get("/users", (req, res) => {
                res.json({ name: "Tony", role: "developer" });
            });

            "http://localhost:3000/users"       // With postman instantly see result
