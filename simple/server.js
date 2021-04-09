//jshint esversion: 6

const express = require("express");

const app = express();

app.get("/", function(req,res){
    res.send("<h1>Hello You</h1>")
});

app.get("/contact", function(req,res){
    res.send("Contact me at amanda@notmyactualemail.com");
});

app.get("/about", function(req,res){
    res.send("This is amanda");
});

app.get("/hobbies", function(req,res){
    res.send("I like baking and photography");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
