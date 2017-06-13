"use strict"

const express = require( 'express' );
const app = express();

const PORT = 3000;

app.use((request, response, next)=>{
  //console.log(request);

  let method = request.method;
  let url = request.url;
  console.log("method: "+ method + " ,url: " + url);

  next();
})

app.get('/', (request, response)=>{

  response.send('Welcome to my SERVER!');

})

app.listen(PORT, ()=>{

  console.log(`Server is now running on ${PORT}`);

});


