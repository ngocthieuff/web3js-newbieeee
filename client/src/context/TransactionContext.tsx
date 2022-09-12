import React from 'react';

type ContextType = {
    connectWallet: (() => Promise<void>);
    test: string;
}

export const TransactionContext = React.createContext<undefined | ContextType>(undefined);

export const TransactionProvider = ({ children } : { children: any }) => {

    const connectWallet = async () => {
        console.log('connectWallet() function in TransactionContext.tsx');
        try {

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