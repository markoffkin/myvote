var ballotCompiledJs = require("gen_ballot_json.js");
var ballotCompiled = ballotCompiledJs.ballotCompiled;

var ballotContract = web3.eth.contract(JSON.parse(ballotCompiled.contracts["Ballot.sol:Ballot"].abi));

var description = 'Should we close TXL?'
var proposals = ['Yes', 'No']

personal.unlockAccount("0x7602a0c77ecc39fd2da08d6b8666701fab19b4b5", "123456"); //-- govt
var ballot = ballotContract.new(description, proposals, {from: web3.eth.accounts[0], data: "0x" + ballotCompiled.contracts["Ballot.sol:Ballot"].bin, gas: 1000000}, 
  function(e, contract) {
    if (!e) {
      if(!contract.address) {
        console.log("Contract transaction send: TransactionHash: " + 
          contract.transactionHash + " waiting to be mined...");
      } else {
        console.log("Contract mined! Address: " + contract.address);
        console.log(contract);
	ballot.setRightToVote("0xb712adb38647c6d0e66e237b648023fd7862af7b", true, {from: web3.eth.accounts[0], gas: 400000});
	personal.unlockAccount("0xb712adb38647c6d0e66e237b648023fd7862af7b", "123456"); //-- ctzn
	ballot.vote(1);
	console.log(web3.toAscii(ballot.getWinnerName()))
      }
    } else {
	console.log("E happened!")
	console.log(e)
    }	
  }
)


