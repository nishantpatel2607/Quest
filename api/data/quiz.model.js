var mongoose  = require('mongoose');

var questionSchema = new mongoose.Schema({
    questionText :{
        type:String,
        required : true
    },
    questionType:Number,
    options : [String],
    correctAnswer:String,
    marks:Number
});


var quizSchema = new mongoose.Schema({
    quizName:{
        type:String,
        required:true
    },
    categoryName:{
        type:String,
        required:true
    },
    subCategoryName:String,
    introductionText:String,
    passingMarks:Number,
    resultCategories:[{marks:Number,category:String}],
    questions:[questionSchema],
    durationinMins:Number
});


mongoose.model('Quiz',quizSchema);