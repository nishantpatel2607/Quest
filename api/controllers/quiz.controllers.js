var mongoose = require('mongoose');
var Quiz = mongoose.model('Quiz');

var _splitArray = function(input,delimiter){
	var output;
	if (input && input.length>0)
	{
		output = input.split(delimiter);
	}
	else
	{
		output = [];
	}
	return output;
};

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


        resultCategories = _splitArray(req.body.resultCategories,';');
        var resultCategoriesLength = resultCategories.length;
        for (var i=0; i<resultCategoriesLength;i++)
        {
            var currCatg = _splitArray( resultCategories[i],':');
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
        .exec(function(err,doc){
            if (err)
            {
                console.log("Error finding quiz");
                res
                .status(500)
                .json(err);
                return;
            }
            else if (!doc)
            {
                res
                .status(404)
                .json({"message":"Quiz not found"});
                return;
            }
            else
            {
                 res
                .status(200)
                .json(doc);
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
				"message":"Invalid count and offset in querystring"
			});
		return;
	}
    if (count > maxCount)
	{
		res
			.status(400)
			.json({
				"message":"count limit of " + maxCount + " exceeded"
			});
		return;
	}

    if (category != '')
    {
        Quiz
		.find({"categoryName":category,"subCategoryName":subCategory})
		.skip(offset)
	 	.limit(count)
		.exec(function(err,quizzes){
			if (err)
			{
				res
				.status(500)
				.json(err);
			}
			else
			{
				console.log("Found quizzes",quizzes.length);
				res
					.json(quizzes);
			}
		});
    }
    else
    {
    Quiz
		.find()
		.skip(offset)
	 	.limit(count)
		.exec(function(err,quizzes){
			if (err)
			{
				res
				.status(500)
				.json(err);
			}
			else
			{
				console.log("Found quizzes",quizzes.length);
				res
					.json(quizzes);
			}
		});
    }
};


module.exports.createQuiz = function (req,res){
console.log(req.body);
    
    Quiz
        .create({
            quizName:req.body.quizName,
            categoryName:req.body.categoryName,
            subCategoryName:req.body.subCategoryName,
            introductionText:req.body.introductionText,
            passingMarks:parseInt(req.body.passingMarks,10),
            durationinMins:parseInt(req.body.durationinMins,10),
            tags:_splitArray(req.body.tags,';')
        },function(err,quiz){
            if (err)
			{
				console.log('Error creating quiz');
				res
					.status(400)
					.json(err);
			} else {
				console.log('Quiz created');
                var successFlag = _addResultCategories(req,quiz);
                if (successFlag){
                    res
                        .status(201)
                        .json(quiz);
                } else {
                    res
                        .status(400)
                        .json({"message":"Error saving result categories"});
                }
			}

        });

};





module.exports.updateQuiz = function (req,res){
    var quizId = req.params.quizId;
    
    Quiz
        .findById(quizId)
        .select("-questions")
        .exec(function(err,quiz){
            
            var response = {
			status:200,
			message:quiz
		    };
            if (err)
            {
                console.log("Error finding quiz");
                response.status= 500
                response.message = err;
                
            }
            else if (!quiz)
            {
                response.status = 404
                response.message = "Quiz not found";
                
            }

            if (response.status != 200)
            {
                res
				.status(response.status)
				.json(response.message); 
            }
            else
            {
                console.log('updating...');

                quiz.quizName = req.body.quizName,
                quiz.categoryName = req.body.categoryName,
                quiz.subCategoryName = req.body.subCategoryName,
                quiz.introductionText = req.body.introductionText,
                quiz.passingMarks = parseInt(req.body.passingMarks,10),
                quiz.durationinMins = parseInt(req.body.durationinMins,10),
                quiz.tags = _splitArray(req.body.tags,";")

                quiz.save(function (err, quizUpdated) {
				if (err)
				{
					res
						.status(500)
						.json(err);
				}
				else
				{
					var successFlag = _addResultCategories(req,quizUpdated);
                    if (successFlag){
                        res
                            .status(201)
                            .json(quizUpdated);
                    } else {
                        res
                            .status(400)
                            .json({"message":"Error saving result categories"});
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
				.status(404)
				.json(err);
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

