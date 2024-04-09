import React, { startTransition } from 'react';
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
  return (
    <>
        <header className='bg-slate-500 shadow-md'>
            <div className='flex items-center justify-between p-2 gap-4'>
                <h3 className='text-yellow-400 uppercase italic font-semibold ml-2'>Bookverse</h3>
                <div className='rounded-lg bg-slate-200 flex items-center p-2'>
                    <input type='text' placeholder='Search' className='bg-transparent w-24 sm:w-72 focus:outline-none' />
                    <button><FaSearch className='text-slate-600 cursor-pointer' /></button>
                </div>
                <ul className='flex gap-4 mr-4 font-semibold text-white cursor-pointer'>
                    <li onClick={()=>startTransition(()=>navigate("/"))}>Home</li>
                    <li onClick={()=>startTransition(()=>navigate("/about"))}>About</li>
                </ul>
            </div>
            

        </header>
    </>
  )
}

export default Header;