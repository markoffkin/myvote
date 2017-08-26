const express = require('express');


const app = express();

const BallotWrapper = require('./truffle/exports/ballot_wrapper.js')
let ballot_wrapper = new BallotWrapper()

app.get('/', function (request, response) {
  response.json({
    name: "wecome to myvote"
  })
});

app.get('/getwinner', function (request, response, next) {
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

  ballot_wrapper.getWinnerName().then(function(winnerName) {
		response.json({winner_name: winnerName});
	}).then(function() {next();})
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!')
})
