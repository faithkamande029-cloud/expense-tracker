import React from 'react'

export default function Searchbar() {
  return (
    <div className='flex items-center justify-center'>
        <input 
            type="text" 
            placeholder='Search expense'
            className='border px-3 py-1 w-75 rounded-2xl'
        />
    </div>
  )
}
