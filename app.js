
require('../Quest/api/data/db.js'); //moongose 
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

var quizCategoriesRoutes = require('./api/routes/quizCategories');
var quizRoutes = require('./api/routes/quiz');

app.set('port',3000);

app.use(function(req,res,next){
	console.log(req.method, req.url);
	next();

});

app.use(express.static(path.join(__dirname,'public')));



app.use(bodyParser.urlencoded({extended:false}));

app.use('/api/quiz',quizRoutes);
app.use('/api/quizcategories',quizCategoriesRoutes);
//app.use('/api',routes);

var Server =  app.listen(app.get('port'),function() {
	var port = Server.address().port;
console.log('Quest listens on port ' + port);	
});