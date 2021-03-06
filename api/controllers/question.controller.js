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
                .json({
                    title:'An error occured',
                    error:err
                });
        } else {
            res
            .status(201)
             .json({
                        message:'Question saved',    
                        obj:quizupdated.questions[quizupdated.questions.length-1]
            });
        }
  });
};

module.exports.addQuestion = function (req,res){
    
    var quizId = req.params.quizId;
    
    Quiz
        .findById(quizId)
        .select("questions")
        .exec(function(err,quiz){
            
            if (err) {
                     res
                    .status(500)
                        .json({
                            title:'An error occured',
                            error:err
                        });
            } else if(!quiz) {
                res
				.status(404)
				.json({
                    title:'An error occured',
                    error:'No quiz found'
                });

            }
            else
            {
                _addQuestion(req,res,quiz);
               
            
            
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
            
            if (err) {
                 res
                    .status(500)
                    .json({
                        title:'An error occured',
                        error:err
                    });
            } 
            else if(!quiz) {
                res
				.status(404)
				.json({
                    title:'An error occured',
                    error:'No quiz found'
                });
            }
            else {
                // Get the question
                thisQuestion = quiz.questions.id(questionId);
                // If the question doesn't exist Mongoose returns null
                if (!thisQuestion) {
                        res
                        .status(404)
                        .json({
                            title:'An error occured',
                            error:'Question ID not found ' + questionId
                        });
                }
                else {
                    thisQuestion.questionText = req.body.questionText;
                    thisQuestion.questionType =  parseInt( req.body.questionType,10);
                    thisQuestion.options = globals.splitArray(req.body.options,';');
                    thisQuestion.correctAnswer = parseInt(req.body.correctAnswer,10);
                    thisQuestion.marks = parseInt(req.body.marks,10);

                    quiz.save(function(err, quizUpdated) {
                    if (err) {
                        res
                            .status(500)
                            .json({
                                title:'An error occured',
                                error:err
                            });
                        } else {
                        res
                            .status(204)
                            .json();
                        }
                    });
                }
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
           
            if (err) {
                res
                    .status(500)
                    .json({
                        title:'An error occured',
                        error:err
                    });
            } 
            else if(!quiz) {
                res
				.status(404)
				.json({
                    title:'An error occured',
                    error:'No quiz found'
                });
            }
            else {
                // Get the question
                thisQuestion = quiz.questions.id(questionId);
                // If the question doesn't exist Mongoose returns null
                if (!thisQuestion) {
                    res
                        .status(404)
                        .json({
                            title:'An error occured',
                            error:'Question ID not found ' + questionId
                        });
                }
                else {
                    quiz.questions.id(questionId).remove();
                    quiz.save(function(err, quizUpdated) {
                    if (err) {
                       res
                            .status(500)
                            .json({
                                title:'An error occured',
                                error:err
                            });
                        } else {
                        res
                            .status(204)
                            .json();
                        }
                    });
                }
            }

            
        });
};

module.exports.getQuestions = function (req,res){
    var quizId = req.params.quizId;

    Quiz
        .findById(quizId)
        .select("questions")
        .exec(function(err,quiz){
            
            if (err) {
               res
                    .status(500)
                    .json({
                        title:'An error occured',
                        error:err
                    });
            } 
            else if(!quiz) {
                res
				.status(404)
				.json({
                    title:'An error occured',
                    error:'No quiz found'
                });
            }
            else {
                res
                    .status(response.status)
                    .json(quiz);
            }

            
        });
};

module.exports.getQuestionsWithoutAnswer = function(req,res){
    
    var quizId = req.params.quizId;
    Quiz
        .findById(quizId)
        .select("-questions.correctAnswer")
        .exec(function(err,doc){
            if (err)
            {
                console.log("Error finding quiz");
                res
                .status(500)
                .json({
                    title:'An error occured',
                    error:err
                });
                return;
            }
            else if (!doc)
            {
                res
                .status(404)
                .json({
                    title:'An error occured',
                    error:err
                });
                return;
            }
            else
            {
                 res
                .status(200)
                .json({
                    message:'Success',    
                    obj:doc
                });
                return; 
            }
        });
};