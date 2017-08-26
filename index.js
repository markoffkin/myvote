const express = require('express');


const app = express();

app.get('/', function (request, response) {
  response.json({
    name: "Valentin"
  })
});

app.get('/vote', function (request, response) {
  /*
    Inside response.json(), you just pass a normal JS object
    It will be converted to a JSON and sent back

    e.g: function getPerson(){
      return {
        name: "Valentin",
        location: "Berlin",
        legs: 2
      }

      response.json(getPerson()) will return the object back as a response
    }
  */
  response.json({
    name: "Kado"
  })
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!')
})