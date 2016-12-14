var fs = require('fs');
function replace (pathname) {
	 var str = fs.readFileSync(pathname,'binary');
	 //	二进制读取
	 str = str.replace('foo','bar'); 
	 fs.writeFileSync(pathname, str, 'binary');
	 //	二进制写入

	 //	其中保存的单字节不会改变,只是读取会编程乱码
}