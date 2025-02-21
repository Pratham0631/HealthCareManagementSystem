import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const [showMenu,setShowMenu]=useState()
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
                            <p onClick={()=>navigate('/profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                            <p onClick={()=>navigate('my-appointment')} className='hover:text-black cursor-pointer'>My Appointment</p>
                            <p onClick={()=>{setToken(false);navigate('/login')} } className='hover:text-black cursor-pointer'>Logout</p>
                        </div>
                    </div>
                </div>:
                <button onClick={()=>navigate('/login')} className='bg-blue-500 rounded-full px-8 py-3 text-white font-light hidden md:block'>Create account</button>
            }

            <img onClick={()=>setShowMenu(true)} className='w-6 md:hidden' src='menu.svg'/>

            <div className={`${showMenu? 'fixed w-full' : 'h-0 w-0' } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                <div className='flex justify-end px-8 py-6'>
                    <img onClick={()=>setShowMenu(false)} className='w-8' src="cross.png" alt="" />
                </div>
                <div>
                    <ul className='flex flex-col items-center gap-2 mt-5 text-lg font-medium'>
                    <NavLink className='px-4 py-2 rounded inline-block' onClick={()=>setShowMenu(false)}  to={'/'}>Home</NavLink>
                    <NavLink className='px-4 py-2 rounded inline-block' onClick={()=>setShowMenu(false)} to={'/doctor'}>All Doctors</NavLink>
                    <NavLink className='px-4 py-2 rounded inline-block' onClick={()=>setShowMenu(false)} to={'/profile'}>Profile</NavLink>
                    <NavLink className='px-4 py-2 rounded inline-block' onClick={()=>setShowMenu(false)} to={'/login'}>Logout</NavLink>
                    </ul>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar