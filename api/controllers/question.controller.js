var mongoose = require('mongoose');
var Quiz = mongoose.model('Quiz');
var globals = require('./globals.js');


var _addQuestion = function (req,res,quiz) {
    if (req.body.correctAnswer == '') req.body.correctAnswer = '0';
    if (req.body.questionType == '') req.body.questionType = '0';
    if (req.body.marks == '') req.body.marks = '0';
    quiz.questions.push({
        questionText:req.body.questionText,
        questionType: parseInt( req.body.questionType,10),
        options:globals.splitArray(req.body.options,';'),
        correctAnswer:parseInt(req.body.correctAnswer,10),
        marks:parseInt(req.body.marks,10)
    });

    quiz.save(function(err,quizupdated){
        if (err){
            res
            .status(500)
            json(err);
        } else {
            res
            .status(201)
            .json(quizupdated.questions[quizupdated.questions.length-1]);
        }
  });
};

module.exports.addQuestion = function (req,res){
    
    var quizId = req.params.quizId;
    
    Quiz
        .findById(quizId)
        .select("questions")
        .exec(function(err,quiz){
            var response = {
                status : 200,
                message : []
            };
            if (err) {
                console.log("Error finding quiz");
                response.status = 500;
                response.message = err;
            } else if(!quiz) {
                console.log("Quiz id not found in database", id);
                response.status = 404;
                response.message = {
                "message" : "Quiz id not found " + id
                };
            }
            if (quiz)
            {
                _addQuestion(req,res,quiz);

            }else{
            res
                .status(response.status)
                .json(response.message);
            } 
        });
    

};


module.exports.updateQuestion = function (req,res){
    var quizId = req.params.quizId;
    var questionId = req.params.questionId;
    if (req.body.correctAnswer == '') req.body.correctAnswer = '0';
    if (req.body.questionType == '') req.body.questionType = '0';
    if (req.body.marks == '') req.body.marks = '0';

    Quiz
        .findById(quizId)
        .select("questions")
        .exec(function(err,quiz){
            var thisQuestion;
            var response = {
                status : 200,
                message : {}
            };
            if (err) {
                console.log("Error finding quiz");
                response.status = 500;
                response.message = err;
            } 
            else if(!quiz) {
                console.log("Quiz id not found in database", quizid);
                response.status = 404;
                response.message = {
                    "message" : "Quiz ID not found " + quizid
                };
            }
            else {
                // Get the question
                thisQuestion = quiz.questions.id(questionId);
                // If the question doesn't exist Mongoose returns null
                if (!thisQuestion) {
                    response.status = 404;
                    response.message = {
                        "message" : "Question ID not found " + questionId
                    };
                }
            }

            if (response.status !== 200) {
            res
                .status(response.status)
                .json(response.message);
            } else {
                thisQuestion.questionText = req.body.questionText;
                thisQuestion.questionType =  parseInt( req.body.questionType,10);
                thisQuestion.options = globals.splitArray(req.body.options,';');
                thisQuestion.correctAnswer = parseInt(req.body.correctAnswer,10);
                thisQuestion.marks = parseInt(req.body.marks,10);

                quiz.save(function(err, quizUpdated) {
                if (err) {
                    res
                        .status(500)
                        .json(err);
                    } else {
                    res
                        .status(204)
                        .json();
                    }
                });
            }
        });
};

module.exports.deleteQuestion = function (req,res){

    var quizId = req.params.quizId;
    var questionId = req.params.questionId;

    Quiz
        .findById(quizId)
        .select("questions")
        .exec(function(err,quiz){
            var thisQuestion;
            var response = {
                status : 200,
                message : {}
            };
            if (err) {
                console.log("Error finding quiz");
                response.status = 500;
                response.message = err;
            } 
            else if(!quiz) {
                console.log("Quiz id not found in database", quizid);
                response.status = 404;
                response.message = {
                    "message" : "Quiz ID not found " + quizid
                };
            }
            else {
                // Get the question
                thisQuestion = quiz.questions.id(questionId);
                // If the question doesn't exist Mongoose returns null
                if (!thisQuestion) {
                    response.status = 404;
                    response.message = {
                        "message" : "Question ID not found " + questionId
                    };
                }
            }

            if (response.status !== 200) {
            res
                .status(response.status)
                .json(response.message);
            } else {
                quiz.questions.id(questionId).remove();
                quiz.save(function(err, quizUpdated) {
                if (err) {
                    res
                        .status(500)
                        .json(err);
                    } else {
                    res
                        .status(204)
                        .json();
                    }
                });
            }
        });
};

module.exports.getQuestions = function (req,res){
    var quizId = req.params.quizId;

    Quiz
        .findById(quizId)
        .select("questions")
        .exec(function(err,quiz){
            var response = {
                status : 200,
                message : {}
            };
            if (err) {
                console.log("Error finding quiz");
                response.status = 500;
                response.message = err;
            } 
            else if(!quiz) {
                console.log("Quiz id not found in database", quizid);
                response.status = 404;
                response.message = {
                    "message" : "Quiz ID not found " + quizid
                };
            }

            if (response.status !== 200) {
            res
                .status(response.status)
                .json(response.message);
            } else {
                res
                    .status(response.status)
                    .json(quiz);
            }
        });
};