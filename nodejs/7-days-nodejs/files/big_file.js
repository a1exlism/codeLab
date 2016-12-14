var fs = require('fs');

function copy( src, dst ){
	fs.createReadStream(src).pipe( fs.createWriteStream( dst ) );
	//	水顺着水管从一个桶流到了另一个桶
}

function main( argv ){	//此argv只是一个形参
	copy(argv[0], argv[1]);
}

main( process.argv.slice( 2 ) );