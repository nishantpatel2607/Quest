var mongoose  = require('mongoose');
var dburl = 'mongodb://localhost:27017/quest';
mongoose.Promise = global.Promise;
mongoose.connect(dburl);

mongoose.connection.on('connected',function(){
	console.log('mongoose connected to ' + dburl);

});

mongoose.connection.on('disconnected',function(){
	console.log('mongoose disconnected to ' + dburl);

});
mongoose.connection.on('error',function(err){
	console.log('mongoose connection error ' + err);

});

require('./quiz.model.js');
require('./quizCategory.model.js');