var mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment");
    
var data = [
        {   name : "Desert miracle",
            image: "https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis dolor et tortor bibendum, vitae mollis neque commodo. Suspendisse interdum libero a erat tincidunt, id rhoncus nibh posuere. Phasellus felis nisi, cursus ut fringilla sed, congue sed sem. Cras id varius mauris. Morbi dapibus magna nisi, vel porta lorem laoreet in. Cras interdum mauris augue, nec vulputate diam ultrices et. Curabitur ut mauris id sapien malesuada viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. "
        },
        {   name : "Frenzy Forest",
            image: "https://farm5.staticflickr.com/4016/4369518024_0f64300987.jpg",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis dolor et tortor bibendum, vitae mollis neque commodo. Suspendisse interdum libero a erat tincidunt, id rhoncus nibh posuere. Phasellus felis nisi, cursus ut fringilla sed, congue sed sem. Cras id varius mauris. Morbi dapibus magna nisi, vel porta lorem laoreet in. Cras interdum mauris augue, nec vulputate diam ultrices et. Curabitur ut mauris id sapien malesuada viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. "
        },
        {   name : "Backyard Playground",
            image: "https://farm3.staticflickr.com/2311/2123340163_af7cba3be7.jpg",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis dolor et tortor bibendum, vitae mollis neque commodo. Suspendisse interdum libero a erat tincidunt, id rhoncus nibh posuere. Phasellus felis nisi, cursus ut fringilla sed, congue sed sem. Cras id varius mauris. Morbi dapibus magna nisi, vel porta lorem laoreet in. Cras interdum mauris augue, nec vulputate diam ultrices et. Curabitur ut mauris id sapien malesuada viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. "
        }
    ]
    

    
function seedDB(){
    Campground.remove({},function(err){
    //     if(err){
    //         console.log(err);
    //     }
    //     console.log("campgrounds removed");
    //     data.forEach(function(seed){
    //         Campground.create(seed,function(err,campground){
    //         if(err){
    //             console.log(err);
    //         }else{
    //             console.log("campground created");
    //             Comment.create({
    //                 text : "this is a hidden paradise",
    //                 author : "Hommy"
    //             },function(err,comment){
    //                 if(err){
    //                     console.log(err);
    //                 }else{
    //                     campground.comments.push(comment);
    //                     campground.save();
    //                     console.log("comment created");
    //                 }
    //             });
                
    //         }
    //     });
    // });
    });
}    

module.exports = seedDB;