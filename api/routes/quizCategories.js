var express = require('express');
var router = express.Router();

var ctrlQuizCategory = require('../controllers/quizCategory.controller.js');



router 
.route('/')
.get(ctrlQuizCategory.getAllCategories)
.post(ctrlQuizCategory.createCategory);

router 
.route('/:quizCategoryId')
.get(ctrlQuizCategory.getCategory)
.put(ctrlQuizCategory.updateCategory)
.delete(ctrlQuizCategory.deleteCategory);

module.exports = router;