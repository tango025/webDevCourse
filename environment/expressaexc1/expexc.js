var express = require("express");
var app = express();

app.get("/",function(req,res){
    res.send("Hi there ,this is tango");
});

app.get("/speak/:animal",function(req,res){
    var animal = req.params.animal;
    
    if(animal === "cat")
        res.send("Meow");
    else if (animal === "dog")
        res.send("bhow-bhow");
    else if (animal === "wolf")
        res.send("howl");
    else if (animal === "cow")
        res.send("mow");
    else if (animal === "pig")
        res.send("oink");
        
});

app.get("/repeat/:word/:number",function(req,res){
   var number = Number(req.params.number);
   var word = req.params.word;
   var result = "";
   for(var i = 0;i<number;i++)
   {
        result +=word + " ";   
   }   
        res.send(result);  
});

app.get("*",function(req, res) {
    res.send("Wrong link");
})


app.listen(process.env.PORT,process.env.IP,function(){
    console.log("From the server");
});