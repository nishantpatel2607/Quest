var express = require('express');
var router = express.Router();

var ctrlQuiz = require('../controllers/quiz.controller.js');
var ctrlQuestion = require('../controllers/question.controller.js');
var ctrlQuizCategory = require('../controllers/quizCategory.controller.js');



router 
.route('/')
.get(ctrlQuizCategory.getAllCategories)
.post(ctrlQuizCategory.createCategory);

router 
.route('/quizcategories/:quizCategoryId')
.put(ctrlQuizCategory.updateCategory)
.delete(ctrlQuizCategory.deleteCategory);

module.exports = router;