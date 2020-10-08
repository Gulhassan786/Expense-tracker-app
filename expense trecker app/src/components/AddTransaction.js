import React, { useState, useContext } from 'react';
import GlobalContext from "./globalstate";

const Addtransaction = () => {
    const [text, settext] = useState('');
    const [amount, setAmount] = useState(0);
    const { ADDTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
        ADDTransaction(newTransaction)
    }
    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => { settext(e.target.value) }} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="Amount">Amount <br /> (negative - expense , positive - income)</label>
                    <input type="number" value={amount} onChange={(e) => { setAmount(e.target.value) }} className="amount" placeholder="Enter amount..." />
                </div>
                <button className="btn">Add Transactions</button>
            </form>
        </>
    )
}
export default Addtransaction;