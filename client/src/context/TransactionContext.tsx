import React, { useState } from 'react';

type ContextType = {
    connectWallet: (() => Promise<void>);
    test: string;
}

const { ethereum } = window;

export const TransactionContext = React.createContext<undefined | ContextType>(undefined);

export const TransactionProvider = ({ children } : { children: any }) => {
    
    const [currentAccount, setCurrentAccount] = useState("");

    const connectWallet = async () => {
        console.log('connectWallet() function in TransactionContext.tsx');
        try {
            // https://ethereum.stackexchange.com/questions/67145/how-to-connect-web3-with-metamask
            // The Metamask interface has changed to enable privacy and consent from the user before allowing any access to the account 
            // information contained within Metamask. This is done by injecting an "ethereum" object to the browser window. 
            // You must now wait for the ethereum.enable() function to return true after prompting the user. 

            if(!ethereum) return alert("Please install metamask");
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            console.log('account connect successfully: ', accounts);
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error);
            throw new Error("No Ethereum object found.");
        }
    }

    const contextType: ContextType = {
        connectWallet: connectWallet,
        test: 'Ngoc',
        }

    return (
        <TransactionContext.Provider value={contextType}>
            {children}
        </TransactionContext.Provider>
    );
}