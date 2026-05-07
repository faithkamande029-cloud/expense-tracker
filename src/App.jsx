import React, { useState } from "react"
import Header from "./components/header"
import Searchbar from "./components/searchbar"
import ExpenseForm from "./components/expense-form"
import ExpenseTraker from "./components/expense-tracker"

function App() {
  const [expenses, setExpenses] = useState([]);

  function addExpense(newExpense){
    setExpenses([...expenses, newExpense])
  }

  return (
    <div>
      <div className="w-100 p-4">
        <Header/>
      </div>
      
      <div className="flex p-4 gap-4 ">
        <ExpenseForm addExpense={addExpense}/>
        <div className="flex flex-col gap-2 items-start">
          <Searchbar />
          <ExpenseTraker expenses={expenses}/>
        </div>
        

      </div>
      

    </div>
  )
}

export default App
