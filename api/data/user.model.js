var mongoose  = require('mongoose');

var userSchema = new mongoose.Schema({
    fullName :{
        type:String,
        required : true
    },
    email :{
        type:String,
        required : true
    },
    userName:String, //Mainly used if member of hosted quiz.
    password :{
        type:String,
        required : true
    },
    companyName:String,
    userCatgory:Number, //0 - Normal user, //1 - User who can host the quiz, //3 - Admin
    subscriptionStartDate:String,
    subscriptionEndDate:String,
    hostedQuizzes:[String], //private quiz ids hosted by user
    subscribedQuizzes:[String]//private quiz ids to which user has subscribed to
});

mongoose.model('User',userSchema);