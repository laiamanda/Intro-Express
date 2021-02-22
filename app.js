var express = require("express");
var app = express();

// "/" => "HI THERE"
app.get("/", function(req,res){
	res.send("Hi There");
});
// "/bye" => "GoodBye"
app.get("/bye",function(req,res){
	res.send("Goodbye!");
});
// "/dog" => "Meow"
app.get("/dog",function(req,res){
	res.send("Meow");
});
app.get("*", function(req,res){
	res.send("You're a star!");
});

//Tell Express to listen for request
app.listen(3000,function(){
	console.log("Server listening on Port 3000");
});
