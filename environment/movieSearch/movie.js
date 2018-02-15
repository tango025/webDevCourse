var express = require("express");
var request = require("request");
var app = express();
app.set("view engine","ejs")
app.get("/",function(req,res){
    res.render("search");
});
app.get("/goa",function(req,res){
    var a = req.query.key;
    request("http://www.omdbapi.com/?apikey=cf06f1be&s="+a,function(error,response,body){
        
        if(!error && response.statusCode == 200)
        {   
            var result = JSON.parse(body);
            // res.send(result["Search"][0]["Year"]);
            res.render("results",{data:result});
            
        }
    });
});



app.listen(process.env.PORT,process.env.IP,function(){
    console.log("From the server");
})