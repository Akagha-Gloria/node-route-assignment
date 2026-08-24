const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain",
    });

    if (req.url === "/") {
        res.end("Welcome to my Node.js server!");
    } else if (req.url === "/home") {
        res.end("This is the home page. The Illustrator arts - Beyond art");
    } else if (req.url === "/contact-us") {
        res.end("Contact us on instagram theillustratorarts ");
    } else if (req.url === "/about") {
        res.end("About us. The Illustrator arts is a creative initiative that is channeled solely towards the enlightenment and edification of individuals by the artistic representation of inspired illustrations");
    } else {
        res.end("404 - page not found");
    }

});

server.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
});

