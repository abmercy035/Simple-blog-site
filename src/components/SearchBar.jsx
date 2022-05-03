import React from 'react'

export default function SearchBar({handleInput}) {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
     <input type="search" id='search-bar' onChange={handleInput} placeholder='Search Post' />
    </form>
  )
}
