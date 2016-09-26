var express = require('express');
var router = express.Router();

var ctrlUser = require('../controllers/user.controller.js');

router 
.route('/signup')
.post(ctrlUser.signUp);

router
.route('/:email')
.get(ctrlUser.findByEmail);

module.exports = router;
