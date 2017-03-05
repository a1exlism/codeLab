function heavyCompute( n ){
	var count = 0,
		i,j;
	for( i = n; i > 0; i--){
		for( j = n; j > 0; j--){
			count ++;
		}
	}
}

var t = new Date();

setTimeout(function(){
	console.log(new Date() - t);
}, 1000);

heavyCompute( 50000 );
//  因为单线程的问题,JS主函数的执行时间被大幅延迟
