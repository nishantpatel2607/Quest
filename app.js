
require('../Quest/api/data/db.js'); //moongose 
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

var quizCategoriesRoutes = require('./api/routes/quizCategories');
var quizRoutes = require('./api/routes/quiz');
var userRoutes = require('./api/routes/user');

app.set('port',3000);

app.use(function(req,res,next){
	console.log(req.method, req.url);
	next();
});



app.use(express.static(path.join(__dirname,'public')));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/fonts', express.static(__dirname + '/app/assets/fonts'));
app.use('/stylesheets', express.static(__dirname + '/app/assets/stylesheets'));
app.use('/js', express.static(__dirname + '/app/assets/js'));
app.use('/jquery', express.static(__dirname + '/app/assets/jquery'));
app.use('/', express.static(__dirname ));
 

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/quiz',quizRoutes);
app.use('/quizcategories',quizCategoriesRoutes);
app.use('/user',userRoutes);
//app.use('/api',routes);

var Server =  app.listen(app.get('port'),function() {
	var port = Server.address().port;
console.log('Quest listens on port ' + port);	
});