function goodVsEvil(good, evil){
	good = good.split(' ');
	evil = evil.split(' ');
	var good_val = [1,2,3,3,4,10];
	var evil_val = [1,2,2,2,3,5,10];
	var good_sum = 0;
	var evil_sum = 0;
	for( let i in good ){
		good_sum += good_val[i]*good[i];
	}
	for( let i in evil ){
		evil_sum += evil_val[i]*evil[i];
	}
	if( good_sum > evil_sum ){
		return "Battle Result: Good triumphs over Evil";
	}else if( good_sum < evil_sum ){
		return "Battle Result: Evil eradicates all trace of Good";
	}else{
		return "Battle Result: No victor on this battle field";
	}
}

// Best Practices
function goodVsEvil(good, evil){
	var getWorth = function( side, worth){
		return side.split(' ').reduce(function(result, value, index){
			return result + (worth[index]*value);
		}, 0);	//	reduce(function(){},x) x为回调的初始值
	}
	var result = getWorth( good, [1,2,3,4,10]) - getWorth( evil, [1,2,2,2,3,5,10] );

	return result > 0 ? "Battle Result: Good triumphs over Evil" :
		result < 0 ? "Battle Result: Evil eradicates all trace of Good" : "Battle Result: No victor on this battle field";
}