function countWords(str) {
	var string_arr = str.split(/[^a-z0-9]+/i), num ;
	for( let i in string_arr ){
		num = 0;
		if( string_arr[i] == '' ){
			string_arr.splice(i , 1);
			continue;
		}
		var x = string_arr[i].toString().match(/[A-Z]/g);
		if( x != null ){
			if(  x.length > 2 ){
				num = num + x - 1;
			}
		}
		// alert( x );
	}	
	return (num+string_arr.length);
}

//	例子...
function countWords(str) {
  return (str.match(/[^\s]+/g) || []).length;
}