const { response } = require("express");

module.exports.home = function(req,res){
    console.log(req.cookies);
    res.cookie('user_id',45);
    res.cookie('Something',7851064541);
    return res.render('home',{
        title : "Home"
    });
}

// module.exports.actionName = function(req,res){ .... }