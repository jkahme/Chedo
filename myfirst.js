var http = require('http');
http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");                    
}).listen(1337);
console.log("Server running at http://localhost:%d", 1337);
