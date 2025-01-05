/**
 * Write a Node.js program that creates a simple HTTP server. When a client sends a request to the server,
the server should respond with a "Hello, Students!" message#
 */
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, Students!');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
