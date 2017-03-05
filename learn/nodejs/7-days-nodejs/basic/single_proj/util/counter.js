var i = 0;

function count(){
  return i++;
}

exports.count1 = count;
/*
 *定义了一个私有变量并在exports对象中导出了一个公有方法count
 */
