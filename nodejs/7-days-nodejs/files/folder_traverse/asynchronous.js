var fs = require('fs');
var path = require('file');
//	异步暂时不怎么清楚, 学到后面再说
function travel( dir, callback, finish ){
	fs.readdir(dir, function(err, files){
		(function next(i){
			if( i < files.length ){
				var pathname = path.join(dir, files[i]);
				fs.stat(pathname, function(err, stats){
					if( stats.isDirectory() ){
						travel(pathname, callback, function(){
							next( i+1 );
						});
					}else{
						callback( pathname, function(){
							net( i+1 );
						});
					}
				});
			}else{
				finish && finish();
			}
		}(0))
	});
}