const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain",
    });

    if (req.url === "/") {
        res.end("Welcome to my Node.js server!");
    } else if (req.url === "/home") {
        res.end("This is the home page.");
    } else if (req.url === "/contact-us") {
        res.end("This is the contact Us page");
    } else if (req.url === "/about") {
        res.end("This is the about page");
    } else {
        res.end("404 - page not found");
    }

});

server.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
});

