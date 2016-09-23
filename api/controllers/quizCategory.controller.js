var mongoose = require('mongoose');
var QuizCategory = mongoose.model('QuizCategory');
var globals = require('./globals.js');

module.exports.createCategory = function (req,res){
    //Check if cateory already exists
    QuizCategory
    .find({"categoryName":req.body.categoryName})
    .exec(function(err,quizCatg){
        if (err)
        {
            console.log(err);
        }
        else if (!quizCatg || quizCatg.length == 0)
        {
            QuizCategory
            .create({
                categoryName:req.body.categoryName,
                subCategories:globals.splitArray(req.body.subCategories,';')
            },function(err,quizCategory){
                if (err)
                {
                    console.log('Error creating category');
                    res
                        .status(400)
                        .json(err);
                } else {
                    console.log('Category created');
                    res
                        .status(201)
                        .json(quizCategory);
                }

            });
        }
        else
        {
            console.log(quizCatg);
            res
                .status(201)
                .json("Category already exists.");
        }
    });
};


module.exports.getAllCategories = function (req,res){
     QuizCategory
     .find()
     .exec(function(err,quizCategories){
        if (err)
        {
            res
            .status(500)
            .json(err);
        }
        else
        {
            console.log("Found quizCategories",quizCategories.length);
            res
                .json(quizCategories);
        }
    });

};

module.exports.deleteCategory = function (req,res){
    var quizCategoryId = req.params.quizCategoryId;

    QuizCategory
    .findByIdAndRemove(quizCategoryId)
	.exec(function(err,quizCategory){
		if (err)
		{
			res
				.status(404)
				.json(err);
		}
		else
		{
			console.log("Quiz Category deleted id:" , quizCategoryId)
			res
				.status(204)
				.json();
		}
	});
};


module.exports.updateCategory = function (req,res){
     var quizCategoryId = req.params.quizCategoryId;
     console.log(quizCategoryId);
     QuizCategory
    .findById(quizCategoryId)
    .exec(function(err,quizCategory){
        var response = {
			status:200,
			message:quizCategory
		    };
        
        if (err){
            console.log("Error finding quiz category");
            response.status= 500
            response.message = err;
            
        }
        else if (!quizCategory){
            response.status = 404
            response.message = "Quiz category not found";
        }

        if (response.status != 200)
        {
            console.log('not found');
            res
            .status(response.status)
            .json(response.message); 
        }
        else
        {
            console.log('found');
            quizCategory.categoryName = req.body.categoryName;
            quizCategory.subCategories= globals.splitArray(req.body.subCategories,';');

            quizCategory.save(function (err, quizCategoryUpdated) {
                if (err){
                    res
                        .status(500)
                        .json(err);
                }
                else{
                    res
                        .status(201)
                        .json(quizCategoryUpdated);
                }
            });

        }
     });
};

