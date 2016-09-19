var mongoose  = require('mongoose');


var quizCategorySchema = new mongoose.Schema({
    categoryName:String,
    subCategories:[String]
});

mongoose.model('QuizCategory',quizCategorySchema);