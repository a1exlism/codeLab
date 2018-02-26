var http = require('http');

var testVal = http.get('http://api.wooyun.org/bugs', function(response){
	var body = [];

	// console.log(response.statusCode);
	// console.log(response.headers);
	response.on('data', function(chunk){
		body.push(chunk);
	});
	response.on('end', function(){
		body = Buffer.concat(body);
		// console.log(body.toString());
	});
});

console.log(testVal);
