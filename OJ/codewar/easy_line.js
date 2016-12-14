function easyLine(n) {
	function pascal(n){
		if( n == 0){
			return 1;
		}
		var val_arr = [1];
		var max_num = binomial_coefficient(n,parseInt(n/2));
		var i = 1;
		var sum = 0;
		while( val_arr[val_arr.length-1] < max_num ){
			val_arr.push(binomial_coefficient(n,i++));
		}
		// console.log(val_arr);
		val_arr = val_arr.map(function(elem) {
			return Math.pow(elem,2);
		});
		for( var i = 0; i < val_arr.length; i++){
			sum += val_arr[i];
		}
		if( ! (n % 2) ){
			return sum*2-Math.pow(max_num,2);
		}else{
			return sum*2;
		}
	}
	function binomial_coefficient(n,k){	//二项式定理,获取单个元素值
		return factorial(n)/(factorial(n-k)*factorial(k));
	}
	function factorial( val ){	//阶乘
		var i = 1;
		var sum = 1;
		if( val == 0 ){
			return 1;
		}
		while( i <= val ){
			sum *= i++;
		}
		return sum;
	}
	// return pascal(n);
	return Math.round(Math.log(pascal(n)));
}