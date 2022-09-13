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