/**
 * A simulator SQL using promise chain
 * Promise 链, 函数的顺序执行
 * Created by a1exlism on 16-5-11.
 */

var Q = require('q');
var defer = Q.defer();

var users = [{
	name: 'andrew',
	passwd: 'password'
}];

function getUsername(){
	return defer.promise;
}

function getUser(username){
	var user;
	users.forEach(function(element){
		if(element.name === username){
			user = element;
		}
	});
	return user;  //如果存在则返回一个json对象
}

//  Promise Chain

getUsername().then(function(username){
	return getUser(username);
}).then(function(user){ //类似有个回调,将上面的参数直接放入then中的函数
	console.log(user);
});

defer.resolve('andrew');