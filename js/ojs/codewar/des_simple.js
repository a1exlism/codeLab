/**
 * @author QuentinSmith
 * @version 1.0
 */
/* 测试代码
m1: 0000000000000000000000000000000000000000000000000000000000000000
m2: 
key:11111111000000000000000000000000000000000000000000000000
 */
// 1.初始置换IP
function replaceIP(plainText){
	var changedText[64] = 0;
	for (var i = 1,var position = 0;i < plainText.length+1; i++) {
		position = 58-floor(i/33)+2*(floor((i-1)/8)%4)-8*((i-1)%8);
		position--;	//0开始	
		changedText[i] = plainText[position];
	}
	return changedText;
}
// 2.圈函数
function funcF(){
	expandE();
	replaceS();
	repalceP();	
}
// 2.1 扩展变换E
function expandE(oriMatrix){
	var newMatrix = new Array();
	var num = 0;
	for(var i = 0,var j = 0;i < 32;i ++){
		//	j是原数组下标0-31
		if( i % 4 == 0){
			j = (j+32-1)%32;
			newMatrix[k++] = oriMatrix[j];
			i--;
		}else if( i % 4 == 3){
			j = (j+32+1)%32;
			newMatrix[k++] = oriMatrix[j];
			if( i )
		}


	}
}
// 2.2 S-盒替代
// 2.3 P-盒置换
// 3.密钥K扩展