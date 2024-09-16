const http = require('http');
const fs = require('fs');
const PORT = 3000;


//Header are the metadata atached to the responses
const server = http.createServer((req, res) => {
	res.writeHead(200, { 'content-type': 'text/html' });
	fs.createReadStream('index.html').pipe(res);
});
server.listen(PORT);
console.log(`server started on port ${PORT}`);
