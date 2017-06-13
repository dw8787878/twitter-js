"use strict"

const express = require( 'express' );
const nunjucks = require( 'nunjucks' );
const app = express();
const PORT = 3000;

//use nunjucks on app.js
nunjucks.configure('views', {
  autoescape: true,
  express: app,
  noCache: true
});

app.use("/", (request, response, next)=>{
  //console.log(request);

  let method = request.method;
  let url = request.url;
  console.log("method: "+ method + " ,url: " + url);

  next();
})

app.get('/', (request, response)=>{

  response.render('index.html');

})

app.get('/', (request, response)=>{

  response.send('Welcome to my SERVER!');

})

app.listen(PORT, ()=>{

  console.log(`Server is now running on ${PORT}`);

});


