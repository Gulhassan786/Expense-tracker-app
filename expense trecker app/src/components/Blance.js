import React, { useContext } from 'react'
import GlobalContext from "./globalstate";

export const Blance = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <>
            <h4>Blance</h4>
            <h1>${total}</h1>
        </>
    )
}

