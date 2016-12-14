//	About Socket
var net = require('net');
net.createServer(function(conn){
	conn.on('data', function(data){
		conn.write([
			'http/1.1 200 OK',
			'Content-Type: text/plain',
			'Content-Length: 11',
			'',
			'Hello World'
		].join('\n'));
	});
}).listen(9999);