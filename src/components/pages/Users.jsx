import React from 'react'
import { Outlet } from 'react-router-dom'

const Users = () => {
  return (
    <div className='p-6 max-w-xl mx-auto'>
      <h2 className='text-2xl font-bold mb-4'> Users Section</h2>
      <Outlet/>
    </div>
  )
}

export default Users