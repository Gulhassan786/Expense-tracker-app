import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

// Initial state object

const initialState = {
    transactions: [
 //         { id: 1, text: 'Flower', amount: -20 },
 //          { id: 2, text: 'Salary', amount: 300 },
 //          { id: 3, text: 'Book', amount: -10 },
 //          { id: 4, text: 'Camera', amount: 150 }
    ]
};

//  Here we have create the context through which values can be sotred for using : Create context .. In which intial value is our object initialState

const Globalcontext = createContext(initialState);
export default Globalcontext;

//console.log(Globalcontext)
// We need a (provider componant) which provides the context value to childs
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    // Actions
    
    function DeletTransaction(id) {
        dispatch({
            type: 'Delete_trans',
            payload: id
        });
    }

    function ADDTransaction(transactions) {
        dispatch({
            type: 'ADD_trans',
            payload: transactions
        });
    }
    return (
        <Globalcontext.Provider value={{
            transactions: state.transactions,
            DeletTransaction,
            ADDTransaction
        }}>
            {children}
        </Globalcontext.Provider>
    );
}