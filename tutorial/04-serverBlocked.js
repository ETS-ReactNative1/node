// http://www.theprojectspot.com/tutorial-post/nodejs-for-beginners-callbacks/4

var http = require('http');
var url = require('url');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});

    if( url.parse(request.url).pathname == '/wait' ){
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + 15000);
        response.write('Thanks for waiting!');
    }
    else{
        response.write('Hello!');
    }

    response.end();
}).listen(8080);

console.log('Server started');

// node 04-serverBlocked.js
// navigate http://localhost:8080/wait
// navigate htto://localhost:8080
// al terminar de cargar wait terminara hello
// node solo usa una tarea