//正常退出exit(0)
//异常退出exit(1)
try{
	console.log('EXIT');
}catch (err){
	console.log('ERROR:' + err);
	process.exit(1);
}

process.exit(0);