import React from 'react'
import { useState } from 'react'

export default function ExpenseForm() {
  const [item, setItem] = useState({
    expense: '',
    description: '', 
    category: '', 
    price: '', 
    date: '',
  });

  function handleSubmit (event){
    event.preventDefault();

    setItem({
      expense: '',
      description: '', 
      category: '', 
      price: '',
      date: '', 
    })

  }  
  

  return (
    <div className=' border p-3 flex flex-col gap-4 '>
      <div className="flex flex-col gap-1">
        <h2 className="font-bold text-2xl ">Add Expense</h2>
        <p className="text-base text-gray-600">Enter Your expense details below</p>
      </div>

      <div className="border p-2">
        <form className='flex flex-col gap-3 p-2 ' onSubmit={handleSubmit}>
          <input 
            type="text"
            placeholder='Enter expense name' 
            className=' p-2 border rounded'
            value={item.expense}
            onChange={(event) => 
              setItem({
                ...item,
                expense: event.target.value
              })
              
            }
          />
          <input 
            type="text"
            placeholder='Enter expense description' 
            className='p-2 border rounded'
            value={item.description}
            onChange={(event) => 
              setItem({
                ...item,
                description: event.target.value
              })
            }
          />
          <input 
            type="text"
            placeholder='Enter expense category' 
            className='p-2 border rounded'
            value={item.category}
            onChange={(event) => 
              setItem({
                ...item,
                category: event.target.value
              })
            }
          />
          <input 
            type="number"
            placeholder='Enter amount' 
            className='p-2 border rounded'
            value={item.price}
            onChange={(event) => 
              setItem({
                ...item,
                price: event.target.value
              })
            }
          />
          <input 
            type="date"
            placeholder='mm/dd/yyyy'
            className='p-2 border rounded'
            value={item.date}
            onChange={(event) => 
              setItem({
                ...item,
                date: event.target.value
              })
            }

          />
          <button 
            className='bg-black text-white p-1 rounded cursor-pointer'

          >
            Submit
          </button>
        </form>
      </div>
      
    </div>
  )
}
