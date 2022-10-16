const Post = require('../models/post');
const { response } = require("express");

module.exports.home = function(req,res){
    // console.log(req.cookies);
    // res.cookie('user_id',45);
    // res.cookie('Something',7851064541);
    // Post.find({},function(err,posts){
    //     return res.render('home',{
    //         title : "Codeial | Home",
    //         posts : posts
    //     });
    // });
    // populate the user of each post
    Post.find({}).populate('user').exec(function(err,posts){
        return res.render('home',{
            title : "Codeial | Home",
            posts : posts
        });
    });
}

// module.exports.actionName = function(req,res){ .... }