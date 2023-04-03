import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import { DeleteAll } from "./components/DeleteAll";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="parent--container">
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <DeleteAll />
          <AddTransaction />
        </div>
        <div className="container--inside">
          <TransactionList />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
