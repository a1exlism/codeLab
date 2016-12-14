const fs = require('fs');

var readStream = fs.createReadStream('./MySQL_5[1].5中文参考手册.pdf');
var writeStream = fs.createWriteStream('./new_pdf.pdf');

readStream
	.on('data', (chunk) => {
		if( writeStream.write(chunk) === false ){
		//	磁盘写入过慢,导致缓存过多,则暂停读取
			console.log('still cached');
			readStream.pause();
		}
	})
	.on('end', () => {
		console.log('GoodBye');
		writeStream.end();
	});

writeStream.on('drain', () => {	
		//磁盘写完了
		console.log('data drained');
		readStream.resume();
	});
