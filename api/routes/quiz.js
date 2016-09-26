var express = require('express');
var router = express.Router();

var ctrlQuiz = require('../controllers/quiz.controller.js');
var ctrlQuestion = require('../controllers/question.controller.js');

router
.route('/')
.get(ctrlQuiz.getAllQuizzes)
.post(ctrlQuiz.createQuiz);

router
.route('/:quizId')
.get(ctrlQuiz.getQuizOne)
.put(ctrlQuiz.updateQuiz)
.delete(ctrlQuiz.deleteQuiz);


router
.route('/:quizId/questions')
.get(ctrlQuestion.getQuestions)
.post(ctrlQuestion.addQuestion);

router
.route('/:quizId/questions/:questionId')
.put(ctrlQuestion.updateQuestion)
.delete(ctrlQuestion.deleteQuestion);

module.exports = router;