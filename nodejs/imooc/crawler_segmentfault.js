const https = require('https');
const cheerio = require('cheerio');
var url = 'https://segmentfault.com/';


https.get(url, (res) => {
	var x = '';
	console.log('statusCode: ' + res.statusCode);
	var sourceCode = '';
	res.on('data', (data) => {
		sourceCode += data;
	});
	res.on('end', () => {
		var $ = cheerio.load(sourceCode);
		var items = [];
		$('.stream-list__item .title a').each(function (index, element) {
			var $element = $(element);
			items.push({
				id: $element.attr('href').replace(/\/q\//, ''),
				title: $element.text()
			});
		});
		var i = 0;
		$('.stream-list__item .author').each((index, element) => {
			var $element = $(element);
			items[i]['author'] = $element.find('a').first().text()
		});
		console.log(items);
	});
}).on('error', (err) => {
	console.log(err);
});