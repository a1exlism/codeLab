/*-----学习了正则表达式,坑------
*---Nice-->http://www.regexr.com/
*-----字母从小到大排列-------
*/
//---------failed1-------
function AlphabetSoup(str) { 
	str = str.replace(/[^a-z+A-Z]/,'');	//这个可以好好看看
//正则写错 应该为[^a-zA-Z]
  // code goes here
  return str; 
         
}
//----------2------
function AlphabetSoup(str){
	var newStr = '';
	for(var i = 0 ;i < str.length; i++){
		if( str[i] >= 'a'&& str[i] <= 'z' || str[i] >= 'A' && str[i] <= 'Z')
			newStr += str[i];
	}
	//去除了其他元素 下面进行分组排序
	var result = '';
	var unicode = 97;
	for( var j = 0;j < 26; j++){
		for( var i = 0;i < newStr.length; i++){
			if( newStr[i].charCodeAt() == unicode)
				result += newStr[i];
		}
		unicode ++;
	}
	return result;
}

AlphabetSoup('readline()');

//-----Others' 1---------
/*		----Got----
*	arr.push()方法添加一个或多个元素到数组的末尾,并返回数组新的长度(length 属性值)
*/
function AlphabetSoup(str) { 
var sorting = [];
  for (var i = 0; i<str.length; i++){
    sorting.push(str[i]);
    //化为数组,有一个方法可以简化 yourString.split()
  }
//Array.prototype.sort()
  sorting.sort();
  str = "";
  for(var i =0; i<sorting.length; i++){
    str = str + sorting[i];
       
  }
  // code goes here  
  return str; 
         
}
/*
*		---修改版-----
*		发现其他人都这么写,新技能Get
*/
function AlphabetSoup (str) {
	str = str.replace(/[^a-zA-Z]/,'');
	alert(str);
	var sorting = [];
	sorting = str.split('');	//str->arr
	sorting.sort();
	str = sorting.join('');		//arr->str
	return str;
}