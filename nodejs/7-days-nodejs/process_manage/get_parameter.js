var process = require('process');
function main(argv){
	//..code
	console.log(argv.toString());
}

main(process.argv.slice(2));