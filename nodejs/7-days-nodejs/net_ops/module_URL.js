var url = require('url');

var url_component = url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash');

var url_string = url.format({
	protocol: 'http:',
	host: 'www.foo.com',
	pathname: '/path',
	search: 'query=string'
});

var url_concat = url.resolve('http://www.foo.com/aa/bb/cc/', '../../../dd');

console.log( url_component );
console.log( url_string );
console.log( url_concat );
