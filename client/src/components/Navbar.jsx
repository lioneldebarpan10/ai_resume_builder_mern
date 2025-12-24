import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {

   const user = { name: 'John Doe' }
   const navigate = useNavigate();

   const logoutUser = () => {
      navigate('/') // user will come to home page
   }
   return (
      <div className='shadow bg-white'>
         <nav className='z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm'>
            <Link to='/'>
               <img src="/logo.svg" alt="logo" className='h-11 w-auto' />
            </Link>
            <div className='flex items-center gap-4 text-sm'>
               <p className='max-sm:hidden'>Hi, {user?.name}</p>
               <button onClick={logoutUser} className='bg-white hover:bg-slate-50 border border-gray-300 px-7 py-1.5 rounded-full active:scale-95 transition-all'>Logout</button>
            </div>
         </nav>
      </div>
   )
}

export default Navbar