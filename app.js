

var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.set('port',3000);

app.use(function(req,res,next){
	console.log(req.method, req.url);
	next();

});

app.use(bodyParser.urlencoded({extended:false}));

var Server =  app.listen(app.get('port'),function() {
	var port = Server.address().port;
console.log('Quest listens on port ' + port);	
});