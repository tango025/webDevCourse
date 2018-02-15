var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name : String,
    age : Number,
    temperament : String
});

var Cat = mongoose.model("Cat",catSchema);
// var cahmel = new Cat({
//     name : "Mrs Nauros",
//     age : 15,
//     temperament : "evil"
// });

// cahmel.save(function(err,cat){
//     if(err){
//         console.log("Something went wrong");
//     }else{
//         console.log("cat saved to db");
//         console.log(cat);
//     }
// });
Cat.create({
    name : "Pickle",
    age : 20,
    temperament : "good"
},function(err,cat){
    if(err){
        console.log(err);
    }else{
        console.log(cat);
    }
});

Cat.find({},function(err,cats){
    if(err){
        console.log("ERROR");
        console.log(err);
    }
    else{
        console.log("ALL THE CATS");
        console.log(cats);
    }
});

