var express = require("express");
var app = express();
app.get("/",function(req,res){
    res.send("Hi threre");
});
app.get("/dogs",function (req,res) {
    res.send("PLUTO");
    console.log("dogs");
    });
app.get("/bye",function(req,res){
    res.send("GOODBYE");
    console.log("bye");
}) ;
app.get("/red/:gdahdg",function(req,res){
    res.send("co");
    console.log(req);
});
app.get("/red/:name/sharma/:age",function(req,res){
   var par = req.params.name;
   var age = req.params.age;
   res.send(par + age);
   
});
app.get("*",function(req, res) {
    res.send("Hey buddy wrong page");
});


app.listen(process.env.PORT,process.env.IP,function(){
    console.log("From the server");
});