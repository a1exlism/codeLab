var path = require('path');
var fs = require( 'fs' );

function travel( dir, callback ){
	fs.readdirSync( dir ).forEach( function( file ){
		var pathname = path.join( dir, file );

		if( fs.statSync(pathname).isDirectory() ){
			travel( pathname, callback );
		}else{
			callback( pathname );
		}
	});
}

function callback_fun( x ){
	console.log( x );
}

travel( process.argv.slice(2).toString(),callback_fun );