var express = require('express');
var router = express.Router();

var ctrlQuiz = require('../controllers/quiz.controller.js');
var ctrlQuestion = require('../controllers/question.controller.js');
var ctrlQuizCategory = require('../controllers/quizCategory.controller.js');

router
.route('/quiz')
.get(ctrlQuiz.getAllQuizzes)
.post(ctrlQuiz.createQuiz);

router
.route('/quiz/:quizId')
.get(ctrlQuiz.getQuizOne)
.put(ctrlQuiz.updateQuiz)
.delete(ctrlQuiz.deleteQuiz);


router
.route('/quiz/:quizId/questions')
.get(ctrlQuestion.getQuestions)
.post(ctrlQuestion.addQuestion);

router
.route('/quiz/:quizId/questions/:questionId')
.put(ctrlQuestion.updateQuestion)
.delete(ctrlQuestion.deleteQuestion);

router 
.route('/quizcategories')
.get(ctrlQuizCategory.getAllCategories)
.post(ctrlQuizCategory.createCategory);

router 
.route('/quizcategories/:quizCategoryId')
.put(ctrlQuizCategory.updateCategory)
.delete(ctrlQuizCategory.deleteCategory);

module.exports = router;