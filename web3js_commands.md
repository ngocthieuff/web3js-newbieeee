```console

 manjaro home ~ node
 
Welcome to Node.js v14.20.0.
Type ".help" for more information.
> var Web3 = require('web3')
undefined
> var url = 'https://eth-goerli.g.alchemy.com/v2/sXBfX47--ndI99SKk1DWG4c391pebDQT'
undefined
> var web3 = new Web3(url)
undefined
> var address = '0x97F8C83E0D4Eb5C8305BFcb14f33d37eaF0c6428'
undefined
> web3.eth.getBalance(address, (err, bal) => { balance = bal })
Promise {
  <pending>,
  [Symbol(async_id_symbol)]: 732,
  [Symbol(trigger_async_id_symbol)]: 5,
  [Symbol(destroyed)]: { destroyed: false }
}
> balance
Uncaught ReferenceError: balance is not defined
> balance
'499883931925163760'
> web3.utils.fromWei(balance, 'ether')
'0.49988393192516376'
> 
```

contract related:

```console
var abi = [
...     {
...       "anonymous": false,
...       "inputs": [
...         {
.....           "indexed": false,
.....           "internalType": "address",
.....           "name": "from",
.....           "type": "address"
.....         },
...         {
.....           "indexed": false,
.....           "internalType": "address",
.....           "name": "receiver",
.....           "type": "address"
.....         },
...         {
.....           "indexed": false,
.....           "internalType": "uint256",
.....           "name": "amount",
.....           "type": "uint256"
.....         },
...         {
.....           "indexed": false,
.....           "internalType": "string",
.....           "name": "message",
.....           "type": "string"
.....         },
...         {
.....           "indexed": false,
.....           "internalType": "uint256",
.....           "name": "timestamp",
.....           "type": "uint256"
.....         },
...         {
.....           "indexed": false,
.....           "internalType": "string",
.....           "name": "keyword",
.....           "type": "string"
.....         }
...       ],
...       "name": "Transfer",
...       "type": "event"
...     },
...     {
...       "inputs": [
...         {
.....           "internalType": "address payable",
.....           "name": "receiver",
.....           "type": "address"
.....         },
...         {
.....           "internalType": "uint256",
.....           "name": "amount",
.....           "type": "uint256"
.....         },
...         {
.....           "internalType": "string",
.....           "name": "message",
.....           "type": "string"
.....         },
...         {
.....           "internalType": "string",
.....           "name": "keyword",
.....           "type": "string"
.....         }
...       ],
...       "name": "addToBlockchain",
...       "outputs": [],
...       "stateMutability": "nonpayable",
...       "type": "function"
...     },
...     {
...       "inputs": [],
...       "name": "getAllTransactions",
...       "outputs": [
...         {
.....           "components": [
.....             {
.......               "internalType": "address",
.......               "name": "sender",
.......               "type": "address"
.......             },
.....             {
.......               "internalType": "address",
.......               "name": "receiver",
.......               "type": "address"
.......             },
.....             {
.......               "internalType": "uint256",
.......               "name": "amount",
.......               "type": "uint256"
.......             },
.....             {
.......               "internalType": "string",
.......               "name": "message",
.......               "type": "string"
.......             },
.....             {
.......               "internalType": "uint256",
.......               "name": "timestamp",
.......               "type": "uint256"
.......             },
.....             {
.......               "internalType": "string",
.......               "name": "keyword",
.......               "type": "string"
.......             }
.....           ],
.....           "internalType": "struct Transactions.TransferStruct[]",
.....           "name": "",
.....           "type": "tuple[]"
.....         }
...       ],
...       "stateMutability": "view",
...       "type": "function"
...     },
...     {
...       "inputs": [],
...       "name": "getTransactionCount",
...       "outputs": [
...         {
.....           "internalType": "uint256",
.....           "name": "",
.....           "type": "uint256"
.....         }
...       ],
...       "stateMutability": "view",
...       "type": "function"
...     }
...   ]


var contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'

var contract = new web3.eth.Contract(abi, contractAddress)

contract 

contract.methods.getAllTransactions().call()
```