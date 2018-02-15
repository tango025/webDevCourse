var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    passport   = require("passport"),
    LocalStrategy = require("passport-local"),
    User       = require("./models/user.js"),
    Campground = require("./models/campground"),
    flash      = require("connect-flash"),
    Comment    = require("./models/comment"),
    methodOverride = require("method-override"),
    seedDB     = require("./seeds"); 
var campgroundRoutes = require("./routes/campground");
var commentRoutes = require("./routes/coment"),
    indexRoutes = require("./routes/index");
    

app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash()); 

mongoose.connect("mongodb://localhost/yelpcamp"); 
app.use(bodyParser.urlencoded({extended : true})); 
app.set("view engine","ejs");
// seedDB(); //seeding the database   

//passport configuration

app.use(require("express-session")({
    secret : "Jonny jonny yes papa",
    resave : false,
    saveUninitialized : false
}));

app.use(passport.initialize());

app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
 
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    
    next();
});

app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);
app.use(indexRoutes);

                    
                    

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("The fire has started");
});