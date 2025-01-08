/**
 * Write a Node.js program that creates an HTTP server and handles different routes. The server should
respond with "Hello, World!" for the root route ("/") and "Page Not Found" for any other route#
 */

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    
    if (req.url === '/') {
        res.statusCode = 200;
        res.end('Hello, World!');
    } else {
        res.statusCode = 404;
        res.end('Page Not Found');
    }
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
