import React, { useReducer, useContext } from 'react';
//import Reducer from './AppReducer'
import GlobalContext from "./globalstate";

export const Transaction = ({ transaction }) => {

    const { DeletTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';
    // const [amount, dispatch] = useReducer(Reducer)
    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
            <button onClick={() => DeletTransaction(transaction.id)} className="delete-btn">X</button>
        </li>)

}