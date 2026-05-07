import React, { useState } from 'react'

export default function Searchbar({ search, setSearch }) {

  function handleChange(e){
    setSearch(e.target.value)
  }

  return (    
      <input 
          type="text" 
          placeholder='Search expense'
          value={search}
          className='border px-3 py-1 w-75 rounded-2xl'
          onChange={handleChange}
      />  
   
  )
}
