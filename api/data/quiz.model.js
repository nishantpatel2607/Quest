var mongoose  = require('mongoose');


var questionSchema = new mongoose.Schema({
    questionText :{
        type:String,
        required : true
    },
    questionType:Number, //1 - objective, 2-subjective
    options : [String],
    correctAnswer:Number,
    marks:Number
});

var resultCategorySchema = new mongoose.Schema({
    marks:Number,
    category:String
})


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
    resultCategories:[resultCategorySchema],
    questions:[questionSchema],
    durationinMins:Number,
    tags:[String]
});


mongoose.model('Quiz',quizSchema);