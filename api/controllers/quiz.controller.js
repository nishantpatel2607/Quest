var mongoose = require('mongoose');
var Quiz = mongoose.model('Quiz');
var globals = require('./globals.js');



var _addResultCategories=function(req,quiz){
    var successFlag = true;
    var resultCategories;
    
    if (req.body.resultCategories != ''){
        //Remove existing result categories
        var existingCatgoriesCount = 0;
        
        existingCatgoriesCount = quiz.resultCategories.length;
        console.log(existingCatgoriesCount);
        
        for (i=existingCatgoriesCount-1;i>=0;--i){
            quiz.resultCategories.id(quiz.resultCategories[i].id).remove();
        }


        resultCategories = globals.splitArray(req.body.resultCategories,';');
        var resultCategoriesLength = resultCategories.length;
        for (var i=0; i<resultCategoriesLength;i++)
        {
            var currCatg = globals.splitArray( resultCategories[i],':');
            quiz.resultCategories.push({
                category:currCatg[0],
                marks:parseInt(currCatg[1],10),
            });
        }
        quiz.save(function(err,quizUpdated){
            if (err)
                successFlag = false;
        });
    }
    return successFlag;
};

module.exports.getQuizOne = function(req,res){
    
    var quizId = req.params.quizId;
    Quiz
        .findById(quizId)
        .select("-questions")
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


module.exports.getAllQuizzes = function(req,res){
    var category = '';
    var subCategory = '';
    var offset = 0;
    var count = 5;
    var maxCount = 10;
    if (req.query)
    {
        if (req.query.category)
            category = req.query.category;

        if (req.query.subcategory)
            subCategory = req.query.subcategory;

        if (req.query.offset)
            offset = parseInt(req.query.offset,10);

        if (req.query.count)
            count = parseInt(req.query.count,10);
    }

    if (isNaN(offset) || isNaN(count))
	{
		res
			.status(400)
			.json({
                title:'An error occured',
				error:"Invalid count and offset in querystring"
			});
		return;
	}
    if (count > maxCount)
	{
		res
			.status(400)
			.json({
                title:'An error occured',
				error:"count limit of " + maxCount + " exceeded"
			});
		return;
	}

    if (category != '')
    {
        Quiz
		.find({"categoryName":category,"subCategoryName":subCategory,"privateQuiz":0})
        .select("-questions")
		.skip(offset)
	 	.limit(count)
		.exec(function(err,quizzes){
			if (err)
			{
				res
				.status(500)
				.json({
                    title:'An error occured',
                    error:err
                });
			}
            else if (!quizzes)
			{
				res
				.status(404)
				.json({
                    title:'An error occured',
                    error:'No quizzes found'
                });
			}
			else
			{
				//console.log("Found quizzes",quizzes.length);
				res
                .status(200)
                .json({
                    message:'Success',    
                    obj:quizzes
                });
					
			}
		});
    }
    else
    {
        Quiz
            .find({"privateQuiz":0})
            .select("-questions")
            .skip(offset)
            .limit(count)
            .exec(function(err,quizzes){
                if (err)
                {
                    res
                    .status(500)
                    .json({
                        title:'An error occured',
                        error:err
                    });
                }
                else if (!quizzes)
                {
                    res
                    .status(404)
                    .json({
                        title:'An error occured',
                        error:'No quizzes found'
                    });
                }
                else
                {
                    console.log("Found quizzes",quizzes.length);
                    res
                        .status(200)
                        .json({
                            message:'Success',    
                            obj:quizzes
                        });
                }
            });
    }
};
 

module.exports.createQuiz = function (req,res){
    if (req.body.passingMarks == '') req.body.passingMarks = '0';
    if (req.body.durationinMins == '') req.body.durationinMins = '0';
    if (req.body.privateQuiz == '') req.body.privateQuiz = '0';  
    
    Quiz
        .create({
            quizName:req.body.quizName,
            categoryName:req.body.categoryName,
            subCategoryName:req.body.subCategoryName,
            introductionText:req.body.introductionText,
            passingMarks:parseInt(req.body.passingMarks,10),
            durationinMins:parseInt(req.body.durationinMins,10),
            tags:globals.splitArray(req.body.tags,';'),
            privateQuiz:parseInt(req.body.privateQuiz,10),
        },function(err,quiz){
            if (err)
			{
				console.log('Error creating quiz');
				res
					.status(500)
                    .json({
                        title:'An error occured',
                        error:err
                    });
					
			} else {
				console.log('Quiz created');
                var successFlag = _addResultCategories(req,quiz);
                if (successFlag){
                    res
                     .status(201)
                        .json({
                            message:'Saved quiz',    
                            obj:quiz
                        });

                       
                } else {
                    res
                        .status(500)
                        .json({
                            title:'An error occured',
                            error:"Error saving result categories"
                        });
                        
                }
			}

        });

};


module.exports.updateQuiz = function (req,res){
    var quizId = req.params.quizId;
    if (req.body.passingMarks == '') req.body.passingMarks = '0';
    if (req.body.durationinMins == '') req.body.durationinMins = '0';
    if (req.body.privateQuiz == '') req.body.privateQuiz = '0';  
    Quiz
        .findById(quizId)
        .select("-questions")
        .exec(function(err,quiz){
           
            if (err)
            {
                
                //console.log("Error finding quiz");
                res
                    .status(500)
                    .json({
                        title:'An error occured',
                        error:err
                    });
                
            }
            else if (!quiz)
            {
                res
				.status(404)
				.json({
                    title:'An error occured',
                    message:'No quiz found'
                });
            }
            else
            {
                //console.log('updating...');

                quiz.quizName = req.body.quizName;
                quiz.categoryName = req.body.categoryName;
                quiz.subCategoryName = req.body.subCategoryName;
                quiz.introductionText = req.body.introductionText;
                quiz.passingMarks = parseInt(req.body.passingMarks,10);
                quiz.durationinMins = parseInt(req.body.durationinMins,10);
                quiz.tags = globals.splitArray(req.body.tags,";");
                quiz.privateQuiz = parseInt(req.body.privateQuiz,10);

                quiz.save(function (err, quizUpdated) {
				if (err)
				{
					res
                    .status(500)
                    .json({
                        title:'An error occured',
                        error:err
                    });
				}
				else
				{
					var successFlag = _addResultCategories(req,quizUpdated);
                    if (successFlag){
                         res
                        .status(201)
                            .json({
                                message:'Saved quiz',    
                                obj:quizUpdated
                        });
                        
                    } else {
                        res
                        .status(400)
                        .json({
                            title:'An error occured',
                            error:"Error saving result categories"
                        });
                        
                    }
				}
			});

            }
        });
};

module.exports.deleteQuiz = function (req,res){
    var quizId = req.params.quizId;

    Quiz
    .findByIdAndRemove(quizId)
	.exec(function(err,quiz){
		if (err)
		{
			 res
                .status(500)
                .json({
                    title:'An error occured',
                    error:err
                });
		}
        else if (!quiz)
			{
				res
				.status(404)
				.json({
                    title:'An error occured',
                    error:'No quiz found'
                });
			}
		else
		{
			console.log("Quiz deleted id:" , quizId)
			res
				.status(204)
				.json();
		}
	});
};

