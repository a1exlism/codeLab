var counter1 = require('./util/counter');
var counter2 = require('./util/counter.js');
//导入counter输出的count()方法
console.log(counter1.count1());
console.log(counter2.count());
console.log(counter2.count());
