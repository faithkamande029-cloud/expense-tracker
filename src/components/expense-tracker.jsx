import React from 'react'

export default function ExpenseTraker({ expenses }) {
 
  return (
    <div className='relative overflow-x-auto border rounded-md border-dafault'>
        <table className='w-ful odd:bg-gray-200 bg-white' >
          <thead className='bg-black text-white '>
            <tr>
                <th scope='col' className='text-left px-4 py-3 w-50 font-medium'>Expense</th>
                <th scope='col' className='text-left px-4 py-3 w-55 font-medium'>Description</th>
                <th scope='col' className='text-left px-4 py-3 w-50 font-medium'>Category</th>
                <th scope='col' className='text-left px-4 py-3 w-50 font-medium'>Price</th>
                <th scope='col' className='text-left px-4 py-3 w-50 font-medium'>Date</th>
            </tr> 
          </thead>
            
            <tbody className=''>
              {expenses.map((item) => (
                <tr key={item.id}>
                  <td className='px-4 py-3 w-50 font-semibold'>{item.expense}</td>
                  <td className='px-4 py-3 w-55'>{item.description}</td>
                  <td className='px-4 py-3 w-50'>{item.category}</td>
                  <td className='px-4 py-3 w-50'>{item.price}</td>
                  <td className='px-4 py-3 w-50'>{item.date}</td>
                </tr>
              ))}              
            </tbody>           
            
        </table>

    </div>
  )
}

