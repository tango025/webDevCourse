var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require("./models/post.js");
var User = require("./models/user.js");

// User.create({
//     email : "gaurav@gupta.com",
//     name : "gaurav gupta"
// });

Post.create({
    title : "DJ LLAMA",
    content : "put your hand up-4!!"
},function(err,post){
  User.findOne({name : "gaurav gupta"},function(err,founduser){
      if(err){
          console.log(err);
      }else{
          founduser.posts.push(post);
          founduser.save(function(err,data){
              if(err){
                  console.log(err);
              }else{
                  console.log(data);
              }
          });
      }
  });
});
//   User.findOne({email : "gaurav@gupta.com"}).populate("posts").exec(function(err,data){
//       if(err){
//           console.log(err);
//       }else{
//           console.log(data);
//       }
//   });