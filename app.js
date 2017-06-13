"use strict"

const express = require( 'express' );
const nunjucks = require( 'nunjucks' );
const routes = require('./routes');


const app = express();
const PORT = 3000;

app.set('view engine', 'html');

//use nunjucks on app.js
nunjucks.configure('views', {
  autoescape: true,
  express: app,
  noCache: true
});

//Data
const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.use('/', routes);

app.listen(PORT, ()=>{

  console.log(`Server is now running on ${PORT}`);

});


