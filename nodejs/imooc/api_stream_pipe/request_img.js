const http = require('http');
const fs = require('fs');
const request = require('request');

http
	.createServer((req, res) => {
		
	// 1. Origin 
		// fs.readFile('./facebook.jpg', (err, data) => {
		// 	if( err ) {
		// 		throw "File not exist!"
		// 	}else{
		// 		res.writeHeader(200, {'Context-Type': 'text/html'});
		// 		res.end(data);
		// 	}
		// })

	//	2. Local
		// fs.createReadStream('./facebook.jpg').pipe(res);

	//	3. remote
		request('http://csser.work/img/logo.png')
			.pipe(res);
	})
	.listen(8888);