/**
 * Sessions in express frame
 * Created by a1exlism on 16-5-11.
 */
var express = require('express');
var session = require('express-session');

var app = express();
app.listen(4000);

app.use(session({
	secret: 'recommand 128 bytes random string',
	cookie: {maxAge: 60 * 1000 }
}));

app.get('/', function (req, res){
	if(req.session.isVisit){
		req.session.isVisit++;
		res.send('<p>The ' + req.session.isVisit + 'time to this web site</p>');
	}else{
		req.session.isVisit = 1;
		res.send('WelCome here in 1st time.');
		console.log(req.session);
	}
});
