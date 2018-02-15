var express = require("express"),
    router  = express.Router(),
    User = require("../models/user"),
    passport = require("passport");

router.get("/",function(req,res){
    res.render("landing");
});





//AUTH-ROUTES

router.get("/register",function(req, res) {
    res.render("register");
});

router.post("/register",function(req, res) {
    var newuser = new User({username : req.body.username});
    User.register(newuser,req.body.password,function(err,user){
        if(err){
            req.flash("error",err);
            return res.render("register");
        }
        passport.authenticate("local")(req,res,function(){
            req.flash("success","Welcome to YelpCamp" + user.username  );
            res.redirect("/campgrounds");
        });
    });
    
});
//LOGIN - ROUTES
router.get("/login",function(req, res) {
    res.render("login");
});

router.post("/login",
passport.authenticate("local",{
    successRedirect : "/campgrounds",
    failureRedirect : "/login"
}),function(req, res) {

});
//logout
router.get("/logout",function(req, res) {
    req.logout();
    req.flash("success","Logged you out");
    res.redirect("/campgrounds");
});
//middleware

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;