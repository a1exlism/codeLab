/*-----学到了字符串相加的方法-----------
*	字符转unicode码：用charCodeAt();
*	unicode码转字符：用String.fromCharCode();
* http://www.lezhu99.com/1714.html
*/

//-----failed1---
function LetterChanges(str) { 
	for( var i = 0;i < str.length; i++){
		if(str[i] == 'z')
			str[i] = 'a';
		else
			str[i] = String.fromCharCode(str[i].charCodeAt() + 1);	//转换为unicode
		}
		if(str[i] == ('a' || 'e' || 'i' || 'o' || 'u'))
			str[i].toUpperCase();

	}
  // code goes here  
  return str;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterChanges(readline());

//-------2Start--------
function LetterChange(str){
	var arrStr = str.split("");//先转化为数组
	for( var i = 0;i < arrStr.length; i++){
		if(arrStr[i] == 'z')
			arrStr[i] = 'a';
		else
			arrStr[i] = String.fromCharCode(arrStr[i] + 1);		//终究是这里出错
	}

}

//--------answer-------
function LetterChanges(str) {
	var alpha = "abcdefghijklmnopqrstuvwxyz";
	var newAlpha = "bcdEfghIjklmnOpqrstUvwxyzA";
	var outPut = "";
	for(var i = 0; i < str.length;i++){
		if(alpha.indexOf(str[i]) !== -1){	//indexOf()首次出现的位置  -1时表示字符不存在
			var pos = alpha.indexOf(str[i]);
			outPut += newAlpha.charAt(pos);
		}else{
			outPut += str[i];	//直接输出空格
		}
	}
	return outPut;
}

//------Others'-------
function LetterChanges(str) { 
  var res ="";
  var rev;
  for(var i=0; i<str.length; i++){
    if(str[i].search(/[a-z]|[A-Z]/)!=-1){		//search()函数	字符串对象与一个正则表达式是否匹配,不匹配返回-1
    	//这里正则一直忘记'|'这个符号,导致一直错误
      if(str[i]!="z"&&"Z"){
      rev = String.fromCharCode(str[i].charCodeAt(0)+1);		//发现别人也是这么写的233为什么他写了没事呢
      }else{
         rev = "a";
      }
      if(rev.search(/[aeiou]/gi)!=-1){
        rev = rev.toUpperCase();
      }
      res = res + rev;      
      
    }else{
      res = res + str[i];     //忽略其他符号 
    }
  }
  return res; 
}
LetterChanges(readline());           
