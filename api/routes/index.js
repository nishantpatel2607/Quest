var express = require('express');
var router = express.Router();

var ctrlQuiz = require('../controllers/quiz.controllers.js');

router
.route('/quiz')
.get(ctrlQuiz.getAllQuizzes)
.post(ctrlQuiz.createQuiz);

router
.route('/quiz/:quizId')
.get(ctrlQuiz.getQuizOne)
.put(ctrlQuiz.updateQuiz)
.delete(ctrlQuiz.deleteQuiz);





module.exports = router;