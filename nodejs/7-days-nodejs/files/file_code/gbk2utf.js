var iconv = require('iconv-lite');
var fs = require('fs');
function readGBKText( pathname ){
	var bin = fs.readFileSync( pathname );
	return iconv.decode(bin, 'gbk');
}