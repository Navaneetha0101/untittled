import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { useAuth } from '../store/auth';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const {isLoggedIn} = useAuth();
    const { user } = useAuth();
    const classnameLi = "md:ml-8 md:my-0 my-7"
    const classnameA = "text-white hover:text-slate-300 duration-500"
  return (
   
      <header className='fixed top-0 left-0 w-full'>
        <div className='md:flex items-center justify-between px-7 py-4 bg-neutral-800 text-white
         border-2 border-b-neutral-300 border-opacity-25 border-x-0 md:px-52 h-20'>
            <div className='md:pt-0 pt-4'>
                <NavLink to='/' className=''>Welcome {isLoggedIn ? <>{user ?  `${user.username}` : null}</> : null}  </NavLink>
            </div>
             <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
                    <i class={open ? "fa-solid fa-xmark text-gray-500" : " fa-solid fa-bars text-gray-500"}></i>
             </div>
            <nav>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1]
                    left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in
                      bg-neutral-800 ${open? 'top-20 ': 'top-[-490px]'} ` }>
                    <li className={classnameLi}><NavLink to="/" className={classnameA}>Home</NavLink></li>
                    <li className={classnameLi}><NavLink to="/about" className={classnameA}>About</NavLink></li>
                    <li className={classnameLi}><NavLink to="/contact" className={classnameA}>Contact</NavLink></li>
                    <li className={classnameLi}><NavLink to="/collection" className={classnameA}>Collection</NavLink></li>
                    {isLoggedIn 
                    ? <li className={classnameLi}><NavLink to="/logout" className={classnameA}>Logout</NavLink></li>
                     : <>
                        <li className={classnameLi}><NavLink to="/signup" className={classnameA}>Signup</NavLink></li>
                        <li className={classnameLi}><NavLink to="/login" className={classnameA}>Signin</NavLink></li>
                       </>}
                   
                </ul>
            </nav>
           
        </div>
      </header>
    
  )
}

export default Navbar
