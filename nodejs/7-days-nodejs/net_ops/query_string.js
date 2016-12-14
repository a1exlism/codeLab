var querystring = require('querystring');

var obj = querystring.parse('foo=bar&baz=qux&baz=quux&corge');

var str = querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: ''});

console.log( 'Object: ' + obj );
console.log( '不懂');

console.log( 'String: ' + str );

console.log( { a: 'a', b: 'b', c: 1} );