//The domain is a JS runtime
//	1.Global Object
var process = require('process');
process.on('uncaughtException', function(err){
	console.log('Error: %s', err.message);
});
setTimeout(function(fn){
	fn();
});

//	2.without Domain
var http = require('http');
function async(request, callback){
	/*
	 *-------Here: callback request are inheritanced----------
	 */
	//	Codes
	asyncA(request, function (err, data){	//NodeJs's Defalut arguments[0]:err
	/*
	 *-------Here: err, data are inheritanced----------
	 */
		if ( err ){
			callback(err);
		}else{
			//	Codes
			asyncB(request, function(err, data){
				if (err){
					callback(err);
				}else{
					//	Codes
					asyncC(request, function(err, data){
						if( err ){
							callback(err);
						}else{
							//	Codes
							callback(null, data);
						}
					});
				}
			});
		}
	});
}
http.createServer(function(request, response){
	async(request, function(err, data){
		if(err){
			response.writeHead(500);
		}else{
			response.writeHead(200);
			response.end(data);
		}
	});
});

//	3. With module domain,create a child enviornment
var http = require('http');
var domain = require('domain');
function async(request, callback){
	//	Codes
	asyncA(request, function(data){
		//	Codes
		asyncB(request, function(data){
			//	Codes
			asyncC(request, function(data){
				//	Codes
				callback(data);
			});
		});
	});
}
http.createServer(function(request, response){
	var d = domain.create();
  //  d 为子域对象
	d.on('error', function(){
		response.writeHead(500);
		response.end();
	});

	d.run(function(){
		async(request, function(data){
			response.writeHead(200);
			response.end(data);
		});
	});
});
