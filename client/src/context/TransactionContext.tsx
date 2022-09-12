import React, { useEffect, useState } from 'react';

type ContextType = {
    connectWallet: (() => Promise<void>);
    currentAccount: string;
    formData: any;
    setFormData: any;
    handleChange: any;
}

const { ethereum } = window;

export const TransactionContext = React.createContext<undefined | ContextType>(undefined);

export const TransactionProvider = ({ children } : { children: any }) => {
    
    const [currentAccount, setCurrentAccount] = useState("");
    const [formData, setFormData] = useState({ addressTo: '', amount: '', keyword: '', message: '' });

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

    const contextType: ContextType = {
        connectWallet: connectWallet,
        currentAccount: currentAccount,    
        formData: formData,
        setFormData: setFormData,
        handleChange: handleChange,
    }

    useEffect(() => {
        checkIfWalletIsConnected();
    }, [])

    return (
        <TransactionContext.Provider value={contextType}>
            {children}
        </TransactionContext.Provider>
    );
}