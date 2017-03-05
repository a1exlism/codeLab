//	1.Synchronous
var len = arr.length;

for( let i = 0; i < leng; i++ ){
	arr[i] = sync(arr[i]);
}

//	2.Asynchronous with CLOSURE 

(function next(i, len, callback){
	if( i < len ){
		async(arr[i], function(value){
			arr[i] = value;
			next(i+1, len, callback);
		});
	}else{
		callback();
	}
}(0, arr.length, function(){
	//	All array items have processed
}));

//	3.并行处理
(function (i, len, count, callback){
	for(;i < len; i++ ){
		(function(i){
			async(arr[i], function(value){
				arr[i] = value;
				if( ++count == len ){
					callback();
				}
			});
		}(i));
	}
}(0, arr.length, 0, function(){
	//	All array items have processed.
}));
