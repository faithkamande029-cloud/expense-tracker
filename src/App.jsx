import React, { useState } from "react"
import Header from "./components/header"
import Searchbar from "./components/searchbar"
import ExpenseForm from "./components/expense-form"
import ExpenseTraker from "./components/expense-tracker"

function App() {
  const [expenses, setExpenses] = useState([]);
  const [search, setSearch] = useState('');

  function addExpense(newExpense) {
    setExpenses([...expenses, newExpense])
  }

  const filteredExpenses = expenses.filter((exp) => 
    exp.expense.toLowerCase(). includes(search.toLowerCase()) ||
    exp.description.toLowerCase(). includes(search.toLowerCase()) 

  );

  return (
    <div>
      <div className="w-99 p-4">
        <Header/>
      </div>
      
      <div className="flex p-4 gap-4 ">
        <ExpenseForm addExpense={addExpense}/>
        <div className="flex flex-col gap-3 items-start">
          <Searchbar search={search} setSearch={setSearch}/>
          <ExpenseTraker expenses={filteredExpenses}/>
        </div>
        

      </div>
      

    </div>
  )
}

export default App
