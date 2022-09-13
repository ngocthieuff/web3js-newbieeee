import React, { useEffect, useState } from 'react';
import { contractABI, contractAddress } from '../utils/constants';
import Web3 from 'web3';
// const web3 = new Web3('https://eth-goerli.g.alchemy.com/v2/sXBfX47--ndI99SKk1DWG4c391pebDQT');
// var web3 = new Web3(new Web3.providers.HttpProvider('https://eth-goerli.g.alchemy.com/v2/sXBfX47--ndI99SKk1DWG4c391pebDQT'));

type ContextType = {
    connectWallet: (() => Promise<void>);
    currentAccount: string;
    formData: any;
    setFormData: any;
    handleChange: any;
    sendTransaction: (() => Promise<void>);
}

const { ethereum } = window;
 
var test = import.meta.env.BASE_URL;
console.log('test', test);

export const TransactionContext = React.createContext<undefined | ContextType>(undefined);

export const TransactionProvider = ({ children } : { children: any }) => {
    
    const [currentAccount, setCurrentAccount] = useState("");
    const [formData, setFormData] = useState({ addressTo: '', amount: '', keyword: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionsCount'));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, name: any) => {
        setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
    }

    const connectWallet = async () => {
        console.log('connectWallet() function in TransactionContext.tsx');
        try {
            // https://ethereum.stackexchange.com/questions/67145/how-to-connect-web3-with-metamask
            // The Metamask interface has changed to enable privacy and consent from the user before allowing any access to the account 
            // information contained within Metamask. This is done by injecting an "ethereum" object to the browser window. 
            // You must now wait for the ethereum.enable() function to return true after prompting the user. 

            if(!ethereum) return alert("Please install metamask");
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            setCurrentAccount(accounts[0]);
            console.log('account connect successfully: ', currentAccount);
        } catch (error) {
            console.log(error);
            throw new Error("No Ethereum object found.");
        }
    }

    const checkIfWalletIsConnected = async () => {
        try {
            if(!ethereum) return alert("Please install metamask");
            const accounts = await ethereum.request({ method: 'eth_accounts' });
    
            if(accounts.length) {
                setCurrentAccount(accounts[0]);
                console.log('account: ', accounts[0]);
                // get all transactions
            } else {
                console.log('No accounts found');
            }    
        } catch (error) {
            console.log(error);
            throw new Error("No Ethereum object found.");
        }
    }

    const getEthereumContract = () => {
        // const provider = new ethers.providers.Web3Provider(ethereum);
        // const signer = provider.getSigner();
        // const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);
        // return transactionContract;
        
        var Contract = require('web3-eth-contract');

        var contract = new Contract(contractABI, contractAddress);

        return contract;
        
    }

    const sendTransaction = async () => {
        try {
            // var web3 = new Web3('http://localhost:8545');

            // var web3 = new Web3(new Web3.providers.HttpProvider('https://eth-goerli.g.alchemy.com/v2/sXBfX47--ndI99SKk1DWG4c391pebDQT'));
            // if(!ethereum) return alert("Please install metamask");
            
            // const { addressTo, amount, keyword, message } = formData;

            // const transactionContract = getEthereumContract();
            // const parsedAmount = web3.utils.toHex('234');

            // await ethereum.request({
            //     method: 'eth_sendTransaction',
            //     params: [{
            //         from: currentAccount,
            //         to: addressTo,
            //         gas: '0x5208', // 21000 Gwei
            //         value: parsedAmount,
            //     }]
            // });

            // const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, keyword, message);

            // setIsLoading(true);
            // console.log(`Loading ${transactionHash.hash}`);
            
            // await transactionHash.wait();

            // setIsLoading(false);
            // console.log(`Success ${transactionHash.hash}`);

            // const transactionCount = await transactionContract.getTransactionCount();
            
            // setTransactionCount(transactionCount.toNumber());

            // console.log(transactionCount);
        } catch (error) {
            console.log(error);
            throw new Error("No Ethereum object found.");
        }
    }

    const contextType: ContextType = {
        connectWallet: connectWallet,
        currentAccount: currentAccount,    
        formData: formData,
        setFormData: setFormData,
        handleChange: handleChange,
        sendTransaction: sendTransaction,
    }

    useEffect(() => {
        checkIfWalletIsConnected();
        console.log('test', test);

    }, [])

    return (
        <TransactionContext.Provider value={contextType}>
            {children}
        </TransactionContext.Provider>
    );
}