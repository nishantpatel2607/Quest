var mongoose  = require('mongoose');

var userSchema = new mongoose.Schema({
    firstName :{
        type:String,
        required : true
    },
    lastName :{
        type:String,
        required : true
    },
    email :{
        type:String,
        required : true
    },
    password :{
        type:String,
        required : true
    },
    userCatgory:Number,
    subscriptionStartDate:String,
    subscriptionEndDate:String,
    hostedQuizzes:[String], //private quiz ids hosted by user
    subscribedQuizzes:[String]//private quiz ids to which user has subscribed to
});

mongoose.model('User',userSchema);