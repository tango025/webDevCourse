var express = require("express"),
    router  = express.Router({mergeParams : true}),
    Campground = require("../models/campground"),
    Comment    = require("../models/comment");


router.get("/new",isLoggedIn,function(req,res){
    Campground.findById(req.params.id,function(err,camp){
        if(err){
            console.log(err);
        }else{
            res.render("comments/new",{camp:camp});
        }
    }); 
    
});

router.post("/",isLoggedIn,function(req,res){
    Campground.findById(req.params.id,function(err,campground){
        if(err){
            console.log(err);
            res.redirect("/campgounds"); 
        }else{
            console.log(req.body.comment);
            Comment.create(req.body.comment,function(err,comment){
                if(err){
                    req.flash("error","something went wrong");
                    console.log(err); 
                }else{
                    //getting user from login
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    comment.save();
                    console.log(comment);
                    //adding user details in campground comment
                    campground.comments.push(comment);
                    campground.save();
                     req.flash("success","Sucessfully added Comment"); 
                    res.redirect("/campgrounds/"+ campground._id);
                }
            }); 
        }
    });
});    

router.get("/:comment_id/edit",commOwner,function(req,res){
    Comment.findById(req.params.comment_id,function(err,foundComment){
        if(err){
            res.redirect("back");
        }else{
            res.render("comments/edit",{camp_id : req.params.id ,comment : foundComment});
        }
    });
});
//comment_update
router.put("/:comment_id",commOwner,function(req,res){
   Comment.findByIdAndUpdate(req.params.comment_id,req.body.comment,function(err,updatedComm){
       if(err){
           res.redirect("back");
       }else{
            req.flash("success","Comment updated");
           res.redirect("/campgrounds/" + req.params.id);
       }
   }); 
});

//comm_delete

router.delete("/:comment_id",commOwner,function(req,res){
    Comment.findByIdAndRemove(req.params.comment_id,function(err){
        if(err){
            res.redirect("back");
        }else{
            req.flash("success","Comment deleted");
            res.redirect("/campgrounds/" + req.params.id);
        }
    })
})
function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error","Please login first");    
    res.redirect("/login");
}

function commOwner(req,res,next){
    if(req.isAuthenticated()){
       Comment.findById(req.params.comment_id,function(err,foundComm){
        if(err){
            req.flash("error","Comment not found");
            res.redirect("back");
        } else{
            if(foundComm.author.id.equals(req.user._id)){
                next();
            } else{
                req.flash("error","You don't have permission to do that");
                res.redirect("back");
            }
        }
    }); 
    } else{
        req.flash("error","You need to be logged in to do that");
        res.redirect("back");
    }
    
}

module.exports = router;
    