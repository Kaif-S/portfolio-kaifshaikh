import React from 'react'

const HeroSection = () => {
  return (
    <section className='relative md:px-10 min-h-screen lg:block flex justify-center items-center lg:pt-26 lg:px-28 bg-[#0A0A0B]' id='hero-section'>
      <div className="absolute overflow-hidden top-70 pointer-events-none left-[15%] size-28 md:size-94 blur-3xl rounded-full opacity-10 bg-linear-60 from-greytext to-primary "></div>
      <div className="absolute overflow-hidden top-30 pointer-events-none right-[10%] size-28 md:size-100 rounded-full bg-linear-30 opacity-10 blur-3xl from-primary to-greytext"></div>
        <div className='flex flex-col gap-10'>
        <h1 className='md:text-8xl text-4xl lg:text-left text-center font-epilogue font-black text-white'>Hi, I&apos;m <br /> <span className='text-primary'>Kaif Shaikh</span></h1>
        <span className=' text-greytext md:text-3xl text-lg lg:text-left text-center font-semibold font-dm-sans'>Full Stack Developer & <br/> <span className='text-accent'>Machine Learning</span> Enthusiast</span>
        <p className='md:text-lg text-center lg:text-left text-greytext lg:w-xl font-dm-sans'>
          I build modern web applications, scalable backend systems, and AI-powered solutions that solve real-world problems.
        </p>
        <div className=' flex md:gap-6 gap-3 font-dm-sans md:justify-start justify-center'>
          <button className='rounded-xl bg-accent px-6 py-4 transition-all duration-400 shadow-accent hover:shadow-lg cursor-pointer hover:-translate-y-2'>View Projects</button>
          <button className='cursor-pointer rounded-xl px-6 py-4 border text-white font-semibold border-gray-700 hover:text-primary hover:border-primary transition-all duration-400 hover:-translate-y-2'>Contact me</button>
        </div>
        </div>
        </section>
  )
}

export default HeroSection