var request = require("request");
request('http://www.google.com',function(error,response,body){
    if(error){
        console.log("Error Encountered");
        console.log(error);
    }
    else if(response.statusCode == 200)
    {
        console.log(body);
    }
});

