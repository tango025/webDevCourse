var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.get("/",function(req,res){
    res.render("first");
});
app.get("/firstlieis/:thing",function(req,res){
    var thing = req.params.thing;
    res.render("love",{thingVar : thing});
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("From the server");
});