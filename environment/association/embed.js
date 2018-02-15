var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

var postSchema = new mongoose.Schema({
    title : String,
    content : String
});
var Post = mongoose.model("Post",postSchema);

var userSchema = new mongoose.Schema({
    email : String,
    name : String,
    posts : [postSchema]
});

var User = mongoose.model("User",userSchema);



// var newuser = new User({
//     email : "harry@potter",
//     name : "harry porter"
// });

// newuser.posts.push({
//     title : "kill Voldemort",
//     content : "just kidding, he's already dead"
// });


// newuser.save(function(err,user){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(user);
//     }
// });

// var newpost = new Post({
//     title : "My apps",
//     content : "Stock android with some apps"
// });

// newpost.save(function(err,post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }
// });
User.findOne({name : "harry porter"},function(err,user){
    if (err){
        console.log(err);
    }else{
        user.posts.push({
            title : "find Snape",
            content : "he's is good"
        });
        user.save(function(err,user){
            if(err){
                console.log(err);
            }else{
                console.log(user);
            }
        });
    }
});