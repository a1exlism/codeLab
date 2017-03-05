/**
 * Dynamic Promise Chain
 * Created by a1exlism on 16-5-11.
 */
var Q = require('q');


var funcs = [foo, bar, baz, qux];
var result = Q(initialVal);
funcs.forEach(function(func){
	result = result.then(func);
});
return result;

//  更简洁的方式
var funcs = [foo, bar, baz, qux];
funcs.reduce(function (pre, current) {
	return pre.then(current);
},Q(initialVal));


//  一个具体的例子
function foo(result){
	console.log(result);
	return result + result;
}

	//  手动链接
Q('hello').then(foo).then(foo).then(foo);
	//  动态链接
var funcs = [foo, foo, foo];  //记录函数名
var result = Q('hello');  //  初始状态
funcs.forEach(function(func){
	result = result.then(func);
});

	//  精简后的动态链接
funcs.reduce(function(prev, curr){
	return prev.then(curr);
	//其实就是 curr(prev)
	// 之后由于foo()会返回一个参数,所以上面就能理解成funcs().reduce(prev, curr, function(){})
},Q('hello'));
