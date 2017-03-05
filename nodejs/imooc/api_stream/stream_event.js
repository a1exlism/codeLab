const fs = require('fs');

var readStream = fs.createReadStream('stream_image_copy.js');
var n = 0;

readStream
	.on('data', (chunk) => {
		n++;
		console.log('data emits');
		console.log('is Buffer()? ' + Buffer.isBuffer(chunk));
		// console.log(chunk.toString('utf8'));
		readStream.pause();
		console.log('data paused');
		setTimeout(function(){
			console.log('data pause end');
			readStream.resume();
		}, 3000);
	})
	.on('readable', () => {
		console.log('data readable');
	})
	.on('end', () => {
		console.log('data ends');
		console.log('The numbers: ' + n);
	})
	.on('close', () => {
		console.log('data close');
	})
	.on('error', (err) => {
		console.log('data read error: ' + err);
	})