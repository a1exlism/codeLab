/**
 * Created by a1exlism on 16-5-11.
 */

//  promise
//  Simple Instance
var Q = require('q');
var fs = require('fs');
var defer = Q.defer();
/*
 * 通过defer获取promise
 *
 */
function getInputPromise(){
	return defer.promise;
}

/*
 * 未完成状态开始改变
 * then返回的promise赋值给outputPromise
 * funtion(fulfilled)将新的promise赋给outputPromise
 * 未完成改变为reject
 * */
var outputPromise = getInputPromise().then(function(fulfilled){
	var myDefer = Q.defer();
	fs.readFile('test.txt', 'utf8', function(err,data){
		if(!err && data){
			myDefer.resolve(data);
		}
	});
	return myDefer.promise;
},function(reject){
	throw new Error('rejected');
});

outputPromise.then(function(fulfilled){
	console.log(fulfilled);
},function(rejected){
	console.log(rejected);
});

defer.resolve();
