var mongoose = require('mongoose');
var User = mongoose.model('User');
var globals = require('./globals.js');
var passwordHash = require('password-hash');

//Returns boolean value: Checks if user email is present or not
module.exports.findByEmail = function(req,res){
    var email = req.params.email;
    User
    .find({"email":email})
    .exec(function(err,user){
    if (err)
        {
            res
            .status(500)
            .json(err);
        }
        else if (!user || user.length ==0)
        {
            res
            .status(404)
            .json("User not found");
        }
        else
        {
            res
                .json(user);
        }
    });
};

module.exports.verifyEmail = function(req,res){
    var email = '';
    if (req.query)
    {
        if (req.query.email)
            email = req.query.email;
    }
    
    User
    .find({"email":email})
    .exec(function(err,user){
    if (err)
        {
            res
            .status(500)
            .json(err);
        }
        else if (!user)
        {
            res
            .status(404)
            .json("false");
        }
        else if (user.length == 0 )
        {
            res
            .status(404)
            .json("false");
        }
        else
        {
            res
                .status(200)
                .json("true");
        }
    });
};

module.exports.signUp = function(req,res){
    if (req.body.userCategory == '') req.body.userCategory = '0';
    //console.log(req.body);
    User
        .create({
            fullName:req.body.fullName,
            email:req.body.email,
            userName:req.body.userName,
            password: passwordHash.generate(req.body.password),
            companyName:req.body.companyName,
            userCategory:parseInt( req.body.userCategory,10)
        }, function (err,user){
            if (err)
            {
                res
                    .status(500)
                    .json(err);
            }
            else{
                res
                    .status(201)
                    .json("User created.");
            }
        });
}

module.exports.updateUser = function(req,res){
    
}

module.exports.addPrivateQuiz = function(req,res){

}

module.exports.removePrivateQuiz = function(req,res){
    
}

module.exports.removeUser = function(req,res){
    
}