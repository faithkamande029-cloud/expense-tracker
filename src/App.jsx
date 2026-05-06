import React, { useState } from "react"
import Header from "./components/header"
import Searchbar from "./components/searchbar"
import ExpenseForm from "./components/expense-form"
import ExpenseTraker from "./components/expense-tracker"

function App() {
  const [expenses, setExpense] = useState([])

  return (
    <div>
      <div className="w-100 p-4">
        <Header/>
      </div>
      
      <div className="grid grid-cols-3 p-4 gap-4 ">
        <ExpenseForm/>
        <div className="col-span-2">
          <Searchbar />
          <ExpenseTraker expenses={expenses}/>
        </div>
        

      </div>
      

    </div>
  )
}

export default App
