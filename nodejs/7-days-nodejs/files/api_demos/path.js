//	需要引入path模块
var path = require('path');
var cache = {};

function store (key, value) {
	 cache[path.normalize(key)] = value; 
	 //	路径标准化
}

store('foo/bar', 1);
store('foo//baz//../bar', 2);
console.log( '路径标准化之后: ');
console.log( cache );

var path2 = path.join('foo/','baz//','../bar');
console.log( '路径拼接(自带标准化): ' );
console.log( path2 );

var path3 = path.extname('foo/bar.js');
console.log( '扩展名操作: ');
console.log( path3 );