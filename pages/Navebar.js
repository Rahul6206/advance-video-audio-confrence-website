import React from 'react'
import Link from 'next/link'

const Navebar = () => {
  return (
    <div className='w-screen right-0   h-fit bg-slate-800 text-white flex items-center justify-center r'>
        <nav className='w-full max-h-fit flex items-center justify-between px-4 fixed top-0  bg-slate-800 z-50 p-3'>
            <h1>NAME</h1>
            <ul className='md:w-[20%] w-auto h-full flex items-center justify-evenly gap-2 text-lg mr-2'>
                <li className=' border-2 border-slate-500 transition-all duration-150 relative p-1.5 px-4 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-700  hover:border-slate-300 '>
                    <Link className='' href='/login' >Login</Link>
                    
                </li>
                <li className=' border-2 border-slate-500 transition-all duration-150 relative p-1.5 px-4 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-700  hover:border-slate-300 '>
                    <Link href='/singup' >SignUp</Link>
                </li>
            </ul>


        </nav>


    </div>
  )
}

export default Navebar