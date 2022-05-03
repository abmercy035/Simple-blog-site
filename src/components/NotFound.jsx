import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='not-found'>
     <h2>sorry</h2>
     <p>That page cannot be found</p>
     <Link to='/'> Back to the HomePage...</Link>
    </div>
  )
}
