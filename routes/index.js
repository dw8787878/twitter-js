const express = require('express');
const router = express.Router();


router.use("/", (request, response, next)=>{
  //console.log(request);

  let method = request.method;
  let url = request.url;
  console.log("method: "+ method + " ,url: " + url);

  next();
})

router.get('/', (request, response)=>{

  response.render('index', {title: 'Hall of Fame', people: people} );

})

router.get('/', (request, response)=>{

  response.send('Welcome to my SERVER!');

})

module.export = router;
