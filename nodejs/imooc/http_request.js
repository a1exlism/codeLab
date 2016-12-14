var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
	content: 'New world',
	mid: 8837
});

var options = {
	hostname: 'www.imooc.com',
	port: 80,
	path: '/course/docomment',
	method: 'POST',
	headers: {
		Accept:'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding':'gzip, deflate',
		'Accept-Language':'en-US,en;q=0.8,zh-CN;q=0.6,zh;q=0.4',
		Connection:'keep-alive',
		'Content-Length': postData.length,
		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
		Cookie:'imooc_uuid=ea67a6ba-c157-4196-be7b-1f26d1f1436b; imooc_isnew_ct=1462874978; IMCDNS=0; loginstate=1; apsid=FiZmRhOGQzYzIyZTQ2NmU3ZjUwMDY4YTY2Yjc4OWYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMTM5ODM3MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxMjgyODk5NTc1QHFxLmNvbQAAAAAAAAAAAAAAAAAAADI1NmRkNmFhMTc1ZmFhMmFkZTZmYjY3MWU1MTNlYzQzzg85V84POVc%3DNz; last_login_username=1282899575%40qq.com; PHPSESSID=uhaf70sodlrja95dv3gl4cafu2; jwplayer.qualityLabel=è¶æ¸; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1462874980,1463054986,1463491151; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1463572259; imooc_isnew=2; cvde=573b1a4c7a9ae-45',
		Host:'www.imooc.com',
		Origin:'http://www.imooc.com',
		Referer:'http://www.imooc.com/video/8837',
		'User-Agent':'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.47 Safari/537.36',
		'X-Requested-With':'XMLHttpRequest'	
	}
}

var request = http.request(options, (res) => {
	console.log('Status: ' + res.statusCode);
	console.log('headers: ' + JSON.stringify(res.headers));

	res.on('data', (chunk) => {
		console.log('is buffer? ' + Buffer.isBuffer(chunk));
		console.log('chunk type? ' + typeof chunk);
	});

	res.on('end', () => {
		console.log('Comment done.');
	});
});
	
request.on('error', (err) => {
	console.log('Error: ' + err.message);
});

request.write(postData);
request.end();