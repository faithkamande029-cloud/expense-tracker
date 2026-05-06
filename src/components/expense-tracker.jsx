import React from 'react'

export default function ExpenseTraker({ expenses }) {
 
  return (
    <div className='relative overflow-x-auto border rounded-md border-dafault'>
        <table>
          <thead className='bg-black text-white w-full'>
            <tr>
                <th scope='col' className='px-6 py-3 font-medium'>Expense</th>
                <th scope='col' className='px-6 py-3 font-medium'>Description</th>
                <th scope='col' className='px-6 py-3 font-medium'>Category</th>
                <th scope='col' className='px-6 py-3 font-medium'>Price</th>
                <th scope='col' className='px-6 py-3 font-medium'>Date</th>
            </tr>
          </thead>
            
            <tbody>
              {expenses.map((item) => (
                <tr key={item.id}>
                <tb>{item.expense}</tb>
                <tb>{item.description}</tb>
                <tb>{item.category}</tb>
                <tb>{item.price}</tb>
                <tb>{item.date}</tb>
              </tr>
              ))}              
            </tbody>           
            
        </table>

    </div>
  )
}

