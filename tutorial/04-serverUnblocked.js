var http = require('http');
var url = require('url');
var cp = require('child_process');

function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    if( pathname == '/wait' ){
        console.log("Block Start");
        cp.exec('node 04-block.js', myCallback);
    }
    else{
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('Hello!\n');
        response.end();
    }

    console.log('New connection');

    function myCallback(){
        console.log("Block End");
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('Thanks for waiting!\n');
        response.end();
    }
}
http.createServer(onRequest).listen(8080);
console.log('Server started');