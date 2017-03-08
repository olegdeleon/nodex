var express = require('express');

var app = express();

app.get("/", function(req, res){
  res.send("Hi there!");
});

app.get("/bye", function(req, res){
  res.send("Goodbye!");
});

app.get("/dog", function(req, res){
  console.log("SOMEONE MADE A REQUEST TO /DOG!!!");
  res.send("Meow!");
});

app.get("/r/:subredditName", function(req, res){
  var subreddit = req.params.subredditName;
  res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT");
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res){
  var title = req.params.title;
  res.send("Comments for the " + title + " discussion");
});

app.get("*", function(req, res){
  res.send("You are a star!");
});

app.listen("3000", function(){
  console.log("Server has started!");
});
