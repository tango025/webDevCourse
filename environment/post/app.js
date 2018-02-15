var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
var dost = ["Amanda","Anthony","Rachej","Satvva"];

app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("home");
});
app.get("/freinds",function(req,res){
    res.render("freinds",{friends:dost});
});
app.post("/addfriend",function(req,res){
    dost.push(req.body.newfriend);
    res.redirect("/freinds") ;
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server has started");
});

