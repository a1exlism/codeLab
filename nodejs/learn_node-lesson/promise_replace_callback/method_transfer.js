/**
 * Created by a1exlism on 16-5-11.
 */

var Q = require('q');
var fs = require('fs');
var defer = Q.defer();

function getInputPromise(){
	return defer.promise;
}

var outputPromise = getInputPromise().then(function(fulfilled){
	return 'fulfilled';
});

outputPromise.then(function(fulfilled){
	console.log('fulfilled' + fulfilled);
}, function(rejected){
	console.log('rejected' + rejected);
});

//  Change the inputPromise's Status

//  defer.reject('inputpromise rejected');  //失败跳转

defer.resolve();  //成功跳转


//  错误处理 Deal_with_Error
var outputPromiseError = getInputPromise().fail(function(error){
	console.log(error);
});

