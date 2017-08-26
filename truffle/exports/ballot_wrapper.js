// Import libraries we need.
const Web3 = require( 'web3');
const contract = require('truffle-contract')

// Import our contract artifacts and turn them into usable abstractions.
const ballot_artifacts = require('../build/contracts/Ballot.json')

class BallotWrapper {
	constructor() {
               
    		// set the provider you want from Web3.providers
    		var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));   
    		if(!web3.isConnected())
        		console.log("not connected");
    		else
        		console.log("connected");
		this.Ballot = contract(ballot_artifacts);
		this.Ballot.setProvider(web3.currentProvider);
	}

	getWinnerName() {
    		var self = this;
 	   	var ballot;
    		return self.Ballot.deployed().then(function(instance) {
                	ballot = instance;
      			return ballot.getWinnerName.call();
		}).then(function(response){
			console.log('Response:', response);
    		}).catch(function(e) {
      			console.log(e);
      			self.setStatus("Error getting winner name; see log.");
    		});
	}
}

module.exports = BallotWrapper
