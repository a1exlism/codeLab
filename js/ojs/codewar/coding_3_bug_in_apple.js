function sc(apple){
	var result = [];
	for( let i in apple ){
		let tmp_str = apple[i].join('');
		if( tmp_str.indexOf('B') != -1){
			result.push(i+);
			result.push( tmp_str.indexOf('B'));
			break;
		}
	}
	return result;
}

//	函数式
const sc = apple => apple.reduce(addIndexesIfBugFound, []);
const addIndexesIfBugFound = (result, row, rowIndex) => {
  var bugIndex = row.indexOf("B");
  if (bugIndex > -1){
    result.push(rowIndex);
    result.push(bugIndex);
  }
  return result;
}