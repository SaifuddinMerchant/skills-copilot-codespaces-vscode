// Create web server
// Create a web server that listens to a port and responds with a simple message. 
// The server should listen to port 8080. 
// The server should respond with the following message: "Hello, World!".
// The server should use the http module.

// require http module
var http = require('http');

// create server
var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!');
});

// listen on port 8080
server.listen(8080);

// console.log to show server is running
console.log('Server running at http://localhost:8080/');
