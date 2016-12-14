//1024以下端口需要用root权限监听,需要降权
var process = require('process');
var http = require('http');
http.createServer(callback).listen(80, function(){
	var env = process.env,
			uid = parseInt(env['SUDO_UID'] || process.getuid(), 10),
			gid = parseInt(env['SUDO_GID'] || process.getgid(), 10);
	//	Shoud be IN ORDER
	process.setgid(gid);
	process.setuid(uid);
});
