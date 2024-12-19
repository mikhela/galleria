import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar w-full h-[10vh] '>
            <ul className="navbar--container flex justify-between border-b border-gray-200 pb-8 items-center pt-6">
                <li><a className='text-4xl font-extrabold cursor-pointer'><b>galleria.</b></a></li>
                <li><a className='text-lg font-bold cursor-pointer text-gray-200'>Start slideshow</a></li>
            </ul>
    </div>
  )
}

export default Navbar