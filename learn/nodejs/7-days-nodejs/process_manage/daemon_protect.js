var child_process = require('child_process');
function spawn( mainModule ){
	var worker = child_process.spawn('node', [ mainModule ]);
	worker.on('exit', function(code){
		id ( code !== 0 ){
			spawn(mainModule);
		}
	});
}

spawn('worker.js'); 