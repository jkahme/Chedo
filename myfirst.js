var http = require('http');
var time = new Date(Date.now()).toLocaleString();
var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");
    response.writeBody(200,{"Content-Type"});
    response.end(time);                        
});
var port = process.env.PORT || 1337;
server.listen(port);
console.log("Server running at http://localhost:%d", port);
