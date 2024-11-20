const http  = require('http');
http.createServer(function(req, res){
	res.write("On my way to being an full stack engineer yahhhhhooooooo !");
	res.end();
}).listen(3000);

console.log("Server started at port 3000 !");


