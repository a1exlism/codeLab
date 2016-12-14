//---------这个错误了,然而并没有检测出来= =---------
function PrimeTime(num) { 
	for( var i = 2;i <  Math.sqrt(num) ; i++){
		if( num %  i === 0)
			return false;
	}	
  // code goes here  
  return true; 
         
}
//--------修正---------
function PrimeTime(num) { 
	for( var i = 2;i <  Math.sqrt(num) + 1 ; i++){
		if( ! (num %  i) )
			return false;
	}	
  return true; 
}
//----这个回去补充----
/*信息安全数学基础 张焕炯*/

//--------Others'1---------
/*
*		有人考虑到了算法问题
*/
function PrimeTime(num) { 
  var n = parseInt(num, 10);
  
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 == 0 || n % 3 == 0) return false;
  if (n < 25) return true;
  
  var s = Math.floor(Math.sqrt(n));
  for (var i = 5; i <= s; i += 6) {		//每次能跳6格  厉害
    if (n % i == 0) return false;
    if (n % (i + 2) == 0) return false;
  }
  
  // code goes here
  return true; 
            
}