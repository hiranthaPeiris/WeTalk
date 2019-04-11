var http = require('http');

http.createServer(function (req,res) {
    console.log("User made a request "+ req.url);
    res.writeHead(200,{'content-Type':'text/plain'});
    res.write('Hello world');
    res.end();
}).listen(8080);