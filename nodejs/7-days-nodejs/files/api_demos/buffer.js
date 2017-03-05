//	Buffer数据类型被代替来对二进制数据的操作
var bin = new Buffer([ 0x68, 0x65, 0x6c, 0x6c, 0x6f]);
var str = bin.toString('utf-8');
console.log( str );
//	将字符串转换为指定编码下的二进制数据
console.log( bin );
bin[0] = 0x48;
var sub = bin.slice( 2 );
console.log( sub[0].toString(16) );
var bin = new Buffer('hello', 'utf-8');
console.log( bin );
//	copy Buffer
var dup = new Buffer(bin.length);	//创建新的Buffer,还要分配内存空间
bin.copy( dup );
dup[0] = 0x48;
console.log( bin );
console.log( dup );
