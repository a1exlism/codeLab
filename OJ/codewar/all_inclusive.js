// testing(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]), true)
function containAllRots(string, arr) {
	//	构造数组
	string = string.split('');
	var test_arr = new Array();
	for( let i = 0; i < string.length; i++ ){
		test_arr.push( string.join('') );
		string.unshift(string.pop());	//移位
	}
	//	正则匹配
	console.log(string);
	var flag = 0;
	for( let i = 0; i < string.length; i++){
		let reg_test = new RegExp(test_arr[i]);
		for( let i = 0; i < arr.length; i ++ ){
			if( reg_test.test(arr[i])){
				flag++;
				break;
			}
		}
	}
	if( flag == string.length ){
		return true;
	}else{
		return false;
	}
}

//	推荐
function containAllRots(strng, arr) {
    function rotate(s) {
       return s.substring(1) + s[0];  
    }
    for(var i = 0, l = strng.length; i < l; ++i) {
        if (arr.indexOf(strng) === -1) {
            return false;
        }
        strng = rotate(strng);
    }
    return true;
}