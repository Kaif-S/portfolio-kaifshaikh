import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='lg:px-28 flex md:px-10 z-9999 w-full bg-[#121212] py-4 text-white justify-center md:justify-between h-fit items-center inset-0 sticky'>
        <div className='md:inline hidden font-bold font-epilogue'><a href="#hero-section"><span className='text-white text-3xl'>KS</span><span className='bg-linear-0 from-accent to-primary bg-clip-text text-3xl text-transparent'>.</span></a></div>
        <div>
            <ul className='flex gap-8 justify-center text-center'>
                <li className='hover:text-gray-200 relative nav-tag duration-200 transition-colors text-gray-400 cursor-pointer'><a href="#about-section">About</a></li>
                <li className='hover:text-gray-200 relative nav-tag duration-200 transition-colors text-gray-400 cursor-pointer'><a href="#skills-section">Skills</a></li>
                <li className='hover:text-gray-200 relative nav-tag duration-200 transition-colors text-gray-400 cursor-pointer'><a href="#services-section">Services</a></li>
                <li className='hover:text-gray-200 relative nav-tag duration-200 transition-colors text-gray-400 cursor-pointer'><a href="#projects-section">Projects</a></li>
            </ul>
        </div>
        <div className='md:inline hidden'>
            <button className='bg-accent px-3 py-2 rounded-xl text-black hover:bg-transparent border border-transparent hover:text-white transition-all duration-400 cursor-pointer hover:border-gray-500'>Contact me</button>
        </div>
    </nav>
    </>
  )
}

export default Navbar