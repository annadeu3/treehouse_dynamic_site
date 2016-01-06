//Problem: need a simple way to look at user's badge count
// and js point from web browser
//Solution: use node.js to perform the profile lookups 
//and server our template via HTTP

 //1. create a web server
 //2. handle the HTTP route GET / and POST / 
 //3. Handle the HTTP route GET /: username
 //4. function that handles the reading of files & merge in values

var router = require('./router.js');
var http = require('http');
http.createServer(function(request, response) {
	router.home(request, response);
	router.user(request, response);
}).listen(8000);
console.log('Server running at http://<workspace-url>/');


