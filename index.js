const http = require('http');
var fs = require('fs');

//404_response
function send404Response(response) {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.write('Error 404: page not found');
    response.end();
}

http.createServer(function (req, res) {
    console.log("User made a request " + req.url);
    if (req.method == 'GET' && req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream("./index.html").pipe(res);
    } else {
        send404Response(res);
    }
}).listen(8080);
console.log("server is running..");