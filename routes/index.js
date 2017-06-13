"use strict"

const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank.js');

router.use("/", (request, response, next)=>{
  //console.log(request);

  let method = request.method;
  let url = request.url;
  console.log("method: "+ method + " ,url: " + url);

  next();
})

router.get('/users/:name', function(request, response){
  var paramName = request.params.name;
  var list = tweetBank.find({name: paramName});
  response.render('index', {tweets: list, currName: paramName, showForm: true});

});

router.get('/tweets/:id', function(request, response){
  var id = request.params.id;
  //notice uniqueID is referring to tweetBank.js data key
  var list = tweetBank.find({uniqueID: id});
  response.render('index', {tweets: list, showForm: true});

});

router.get('/', (request, response)=>{
  var people = tweetBank.list();
  //console.log("people", people);

  response.render('index', {title: 'Hall of Fame', tweets : people, showForm: true
});
})

//// START of POSTS

router.post('/tweets', function(request, response){
  var name = request.body.name;
  var text = request.body.text;
  tweetBank.add(name, text);
  response.redirect('/');

});

module.exports = router;
