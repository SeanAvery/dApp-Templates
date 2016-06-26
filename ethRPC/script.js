var Web3 = require('web3');
var web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

if (web3.isConnected()) {
	console.log('web3 is connected');
}
else{
	console.log('not connected');
}


var str = web3.sha3("Some ASCII string to be hashed");
console.log(str);

var defaultAccount = web3.eth.defaultAccount;
console.log(defaultAccount); 
     