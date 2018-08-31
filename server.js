var http = require("http");

var PORTONE = 7000;
var PORTTWO = 7500;

function handleRequest(request, response) {
    response.end("You're AWESOME!: " + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORTONE, function () {
    server.listen(PORTONE, function () {
        console.log("Server listening on: http://localhost:%s", PORTONE);
    });
});

function handleRequest(request, response) {
    response.end("You suck. Sorry: " + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORTTWO, function () {
    server.listen(PORTTWO, function () {
        console.log("Server listening on: http://localhost:%s", PORTTWO);
    });
});