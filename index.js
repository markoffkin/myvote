const express = require('express');


const app = express();

app.get('/', function (req, res) {
  res.json({
    name: "Valentin"
  })
});

app.get('/vote', function (req, res) {
  res.json({
    name: "Kado"
  })
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!')
})