"use strict"

const express = require( 'express' );
const nunjucks = require( 'nunjucks' );
const bodyParser = require('body-parser');

//index.js
const routes = require('./routes');

const app = express();
const PORT = 3000;


app.set('view engine', 'html');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//use nunjucks on app.js
nunjucks.configure('views', {
  autoescape: true,
  express: app,
  noCache: true
});

app.use(express.static('public'));

//will take in the routes declared in a seperate file ./routes/index.js
app.use('/', routes);

app.listen(PORT, ()=>{

  console.log(`Server is now running on ${PORT}`);

});


