var fs = require('fs');	//Buffer with Memory

fs.readFile('facebook.jpg', (err, data) => {
	console.log(Buffer.isBuffer(data));

	fs.writeFile('logo_buffer.png', data, (err) => {
		if(err) throw err;
		console.log('saved');
	});

	var base64Image = data.toString('base64');

	console.log(base64Image);

	var decodedImage = new Buffer(base64Image, 'base64');

	console.log(Buffer.compare(data, decodedImage));


});