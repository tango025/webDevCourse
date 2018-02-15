var express = require("express"),
    router  = express.Router(),
    Campground = require("../models/campground");

router.get("/",function(req,res){
    Campground.find({},function(err,camp){
        if (err){
            console.log(err);
        }else{
              res.render("campgrounds/index",{campground:camp});  
        }
    });
});
router.post("/",isLoggedIn, function(req,res){
    var name = req.body.name;
    var url = req.body.url;
    var description = req.body.description;
    var author = {
        id : req.user._id,
        username : req.user.username
    };
    var campObj = {name : name ,image : url ,description : description , author : author};
    Campground.create(campObj,function(err,newGround){
        if(err){
            console.log(err);
        }
        else{
           res.redirect("/campgrounds"); 
           console.log(newGround);
        }
    });
    
});

router.get("/new",isLoggedIn,function(req,res){
    res.render("campgrounds/new");
});

router.get("/:id",function(req,res){
    Campground.findById(req.params.id).populate("comments").exec(function(err,foundGround){
        if(err){
            console.log(err);
        }else{
            res.render("campgrounds/show",{camp: foundGround});

        }
    });
});

router.get("/:id/edit",campOwner,function(req,res){
       Campground.findById(req.params.id,function(err,foundCamp){
            res.render("campgrounds/edit",{campground : foundCamp});
    });
});
router.put("/:id",campOwner,function(req,res){
    Campground.findByIdAndUpdate(req.params.id,req.body.campground,function(err,updatedCamp){
        if(err){
            res.redirect("/campgrounds");
        }else{
            req.flash("success","Campground updated successfully");
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

//destroy

router.delete("/:id",campOwner,function(req,res){
    Campground.findByIdAndRemove(req.params.id,function(err){
        if(err){
            res.redirect("/campgrounds");
        }else{
            req.flash("success","Campground deleted");
            res.redirect("/campgrounds");
        }
    });
});
function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error","Please login first");
    res.redirect("/login");
}
function campOwner(req,res,next){
    if(req.isAuthenticated()){
       Campground.findById(req.params.id,function(err,foundCamp){
        if(err){
             req.flash("error","Campground not found");
            res.redirect("back");
        } else{
            if(foundCamp.author.id.equals(req.user._id)){
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