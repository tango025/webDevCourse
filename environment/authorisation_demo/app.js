var mongoose    = require("mongoose"),
    express     = require("express"),
    passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    bodyParser  = require("body-parser"),
    passportLocalMongoose = require("passport-local-mongoose"),
    app         = express(),
    User = require("./models/user.js");
    
app.use(require("express-session")({
    secret : "Jonny jonny yes papa",
    resave : false,
    saveUninitialized : false
}));

app.use(bodyParser.urlencoded({extended : true})); 
mongoose.connect("mongodb://localhost/auth_demo");
app.set("view engine","ejs");
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate())); 
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
//-----------
//ROUTES
//------------
app.get("/",function(req,res){
    res.render("home");
});

app.get("/secret", isLoggedIn ,function(req,res){
    res.render("secret");
});

app.get("/register",function(req,res){
    res.render("register");
});

app.post("/register",function(req,res){
   req.body.username
   req.body.password
   User.register(new User({username : req.body.username}), req.body.password,function(err,user){
       if(err){
           console.log(err);
           return res.render("/register");
       }
       passport.authenticate("local")(req,res,function(){
           res.redirect("/secret");
       });
   });
});

//login
app.get("/login",function(req, res) {
    res.render("login");
});
//login logic 
//middleware
app.post("/login", passport.authenticate("local",{
    successRedirect : "/secret",
    failureRedirect : "/login"
}),function(req,res){
    
});

//logout

app.get("/logout",function(req, res) {
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}



app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server started");
});