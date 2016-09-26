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
            res
            .status(500)
            .json({
                title:'An error occured',
                error:err
            });
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
                    //console.log('Error creating category');
                    res
                        .status(400)
                        .json({
                            title:'An error occured',
                            error:err
                        });
                } else {
                    console.log('Category created');
                    res
                        .status(201)
                        .json({
                            message:'Saved category',    
                            obj:quizCategory
                        });
                }

            });
        }
        else
        {
            //console.log(quizCatg);
            res
                .status(201)
                .json({
                        message:'Category already exists',    
                        obj:quizCatg
                    });
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
            .json({
                title:'An error occured',
                error:err
            });
        }
        else
        {
            console.log("Found quizCategories",quizCategories.length);
            res
                .status(200)
                .json({
                    message:'Success',    
                    obj:quizCategories
                });
            
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
     
     QuizCategory
    .findById(quizCategoryId)
    .exec(function(err,quizCategory){
       
        
        if (err){
           res
                .status(500)
                .json({
                    title:'An error occured',
                    error:err
                });
            
        }
        else if (!quizCategory){
            res
				.status(404)
				.json({
                    title:'An error occured',
                    error:'Quiz category not found'
                });
        }
        else
        {
            
            quizCategory.categoryName = req.body.categoryName;
            quizCategory.subCategories= globals.splitArray(req.body.subCategories,';');

            quizCategory.save(function (err, quizCategoryUpdated) {
                if (err){
                    res
                        .status(500)
                        .json({
                            title:'An error occured',
                            error:err
                        });
                }
                else{
                    res
                     .status(201)
                        .json({
                            message:'Saved quiz category',    
                            obj:quizCategoryUpdated
                        });
                }
            });

        }
     });
};

module.exports.getCategory = function (req,res){
     var quizCategoryId = req.params.quizCategoryId;
     
     QuizCategory
    .findById(quizCategoryId)
    .exec(function(err,quizCategory){
        
        
        if (err){
            res
                    .status(500)
                    .json({
                        title:'An error occured',
                        error:err
                    });
            
        }
        else if (!quizCategory){
            res
				.status(404)
				.json({
                    title:'An error occured',
                    error:'Quiz category not found'
                });
        }
        else
        {
            res
                .status(200)
                .json({
                    message:'Success',    
                    obj:quizCategory
                });
        }
     });
};