// Import libraries we need.
const web3 = require( 'web3');
const contract = require('truffle-contract')

// Import our contract artifacts and turn them into usable abstractions.
const ballot_artifacts = require('../build/contracts/Ballot.json')

class BallotWrapper {
	constructor() {
		this.Ballot = contract(ballot_artifacts);
		this.Ballot.setProvider(web3.currentProvider);
	}

	getWinnerName() {
    		var self = this;
 	   	var ballot;
    		return self.Ballot.deployed().then(function(instance) {
                	ballot = instance;
      			return ballot.getWinnerName.call();
    		}).catch(function(e) {
      			console.log(e);
      			self.setStatus("Error getting winner name; see log.");
    		});
	}
}

module.exports = BallotWrapper
