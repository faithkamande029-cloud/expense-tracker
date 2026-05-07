import React from 'react'

export default function ExpenseTraker({ expenses }) {
 
  return (
    <div className='relative overflow-x-auto border rounded-md border-dafault'>
        <table className='w-ful' >
          <thead className='bg-black text-white'>
            <tr>
                <th scope='col' className='text-left px-6 py-3 font-medium'>Expense</th>
                <th scope='col' className='text-left px-6 py-3 font-medium'>Description</th>
                <th scope='col' className='text-left px-6 py-3 font-medium'>Category</th>
                <th scope='col' className='text-left px-6 py-3 font-medium'>Price</th>
                <th scope='col' className='text-left px-6 py-3 font-medium'>Date</th>
            </tr> 
          </thead>
            
            <tbody>
              {expenses.map((item) => (
                <tr key={item.id}>
                  <td>{item.expense}</td>
                  <td>{item.description}</td>
                  <td>{item.category}</td>
                  <td>{item.price}</td>
                  <td>{item.date}</td>
                </tr>
              ))}              
            </tbody>           
            
        </table>

    </div>
  )
}

