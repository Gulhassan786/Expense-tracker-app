import React from 'react';
import Header from './components/Header'
import { Blance } from './components/Blance'
import IncomExpense from './components/IncomExpense'
import Incomtransetion from './components/TransetionList'
import AddTransiction from './components/AddTransaction'
import './App.css';

import { GlobalProvider } from "./components/globalstate";

function App() {
  return (
    <GlobalProvider >
      <Header />
      <div className="container">
        <Blance />
        <IncomExpense />
        <Incomtransetion />
        <AddTransiction />
      </div>
    </GlobalProvider>
  );
}

export default App;
