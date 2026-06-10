import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex lg:px-28 z-9999 w-full bg-[#121212] py-4 text-white justify-between h-fit items-center inset-0 absolute'>
        <div className='font-bold font-epilogue'><span className='text-white text-3xl'>KS</span><span className='bg-linear-0 from-accent to-primary bg-clip-text text-3xl text-transparent'>.</span></div>
        <div>
            <ul className='flex gap-8 justify-center text-center'>
                <li className='text-gray-200 duration-400 transition-colors hover:text-gray-400 cursor-pointer'>About</li>
                <li className='text-gray-200 duration-400 transition-colors hover:text-gray-400 cursor-pointer'>Services</li>
                <li className='text-gray-200 duration-400 transition-colors hover:text-gray-400 cursor-pointer'>Skills</li>
                <li className='text-gray-200 duration-400 transition-colors hover:text-gray-400 cursor-pointer'>Projects</li>
            </ul>
        </div>
        <div>
            <button className='bg-accent px-3 py-2 rounded-xl text-black hover:bg-transparent border border-transparent hover:text-white transition-all duration-400 cursor-pointer hover:border-gray-500'>Contact me</button>
        </div>
    </nav>
  )
}

export default Navbar