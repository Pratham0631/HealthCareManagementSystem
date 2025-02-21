import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate=useNavigate()
    const [token,setToken]=useState(true)
  return (
    <div className='flex item-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'> 
        <h1 className='text-2xl'>HealthCare</h1>
        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to="/">
                <li className='py-1'>HOME</li>
                <hr className='border-none outline-none h-0.5 w-3/5 bg-gray-400 m-auto hidden'/>
            </NavLink>
            <NavLink to="/doctor">
                <li className='py-1'>ALL DOCTORS</li>
                <hr className='border-none outline-none h-0.5 w-3/5 bg-gray-400 m-auto hidden'/>
            </NavLink>
        </ul>
        <div className='flex item-center gap-4'>
            {
                token?
                <div className='flex items-center gap-2 cursor-pointer group relative'>
                    <img src="/profile.png" alt="" className='w-8 rounded-full' />
                    <img src="/Arrow.svg" alt="" className='w-2.5'/>
                    <div className='absolute  top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                        <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                            <p onClick={()=>navigate('profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                            <p onClick={()=>navigate('my-appointment')} className='hover:text-black cursor-pointer'>My Appointment</p>
                            <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                        </div>
                    </div>
                </div>:
                <button onClick={()=>navigate('/login')} className='bg-blue-500 rounded-full px-8 py-3 text-white font-light hidden md:block'>Create account</button>
            }
            
        </div>
    </div>
  )
}

export default Navbar