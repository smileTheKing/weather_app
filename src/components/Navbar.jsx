import { MoonIcon, Search, SunIcon } from 'lucide-react';
import React from 'react'

const Navbar = () => {
  return (
    <nav className=' bg-gray-400/20 w-full p-2 shadow-lg rounded-2xl'>
        <div className='flex items-center mx-auto  container justify-between'>
         <div className=" font-bold text-2xl"><h1>Logo</h1> </div>
         <div className=" font-bold text-1xl flex items-center justify-start space-x-2 border-2 bg-transparent border-white drop-shadow px-4  py-2 rounded-2xl">
            <input placeholder='search city' className='border-none bg-transparent text-center w-full h-full px-4 outline-none text-slate-50 placeholder-slate-50/30'/>
            <button> <Search className=' text-slate-300 hover:scale-105'/></button> 
         </div>
         <div className=" font-bold text-yellow-500 "> <SunIcon size={34}/> </div>
        </div>
    </nav>
  )
}

export default Navbar;