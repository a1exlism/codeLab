var process = require('process');
var util = require('util');
function log(argunments){
	process.stdout.write(
		//	Format Output
		util.format.apply(util, argunments) + '\n' );
}

log(process.argv.slice(2));