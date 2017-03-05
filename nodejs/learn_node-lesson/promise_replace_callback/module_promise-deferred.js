/**
 * 连续读写多个文件
 * Achieve a module with naming {Promise/Deferred}
 * Created by a1exlism on 16-5-11.
 */

//  Pyramid of Doom 邪恶金字塔 Origin
var fs = require('fs');
fs.readFile('s1.txt', 'utf-8', function(err, data){
	console.log(data);
	fs.readFile('s2.txt', 'utf-8', function(err, data){
		console.log(data);
		fs.readFile('s3.txt', 'utf-8', function (err, data){
			console.log(data);
		})
	});
});

//  With dynamic Promise

var fs = require('fs');
var Q = require('q');
var files = ['1.txt', '2.txt', '3.txt'];
//
function printFileContent(fileName){
	return function (){
		var defer = Q.defer();
		fs.readFile(fileName, 'utf8', function(err, data){
			if(!err && data){
				console.log(data);
				defer.resolve();
			}
		});
		return defer.promise;
	}
}
//  手动链接  顺序执行
printFileContent('s1.txt')()
	.then(printFileContent('s2.txt'))
	.then(printFileContent('s3.txt'))

//  并行执行
var Q = require('q');
var fs = require('fs');
function printFileContent(){
	var defer = Q.defer();
	fs.readFile(fileName, 'utf8', function(err, data){
		if(!err && data){
			console.log(data);
			defer.resolve(fileName + ' success');
		}else{
			defer.reject(fileName + ' fail');
		}
	});
	return defer.promise;
}

Q.all([printFileContent('s1.txt'), printFileContent('s2.txt'), printFileContent('s3.txt')])
	.then(function(success){
		console.log(success);
	});
