import { projects } from '@/lib/data'
import React from 'react'

const Projects = () => {
  return (
    <section id='project-section'  className='min-h-screen bg-[#111114] lg:py-26 md:px-10 lg:px-28'>
        <h2 style={{letterSpacing:"3px"}} className='text-accent font-semibold uppercase font-epilogue'>work</h2>
        <div className='mb-12'>
          <h4 className='font-black text-white font-epilogue lg:text-5xl text-xl my-5'>Featured <span className='text-primary'>Projects</span></h4>
          <span className='w-xl text-greytext'>A selection of my best work — from fitness platforms to machine learning systems.</span>
        </div>
        <div className='flex h-120 gap-8'>
        {projects.map((item,index)=>{
          return (
          <div className='w-full rounded-3xl flex flex-col h-full border border-[#222229]' key={index}>
            <div className='h-1/2 w-full rounded-t-3xl flex justify-center items-center group' style={{background:item.bgGradient}}><span className='grayscale-100 group group-hover:scale-125 transition-all duration-400 opacity-20 text-7xl'>{item.emoji}</span></div>
            <div className='h-0.5 w-full' style={{background:item.accentGradient}}></div>
            <div className='mx-4 my-6 flex gap-6 flex-col'>
              <h6 className='text-white text-xl font-epilogue font-bold'>{item.title}</h6>
              <span className='text-greytext text-sm'>{item.description}</span>
              <div className='flex gap-4'>
              {item.tech.map((tech,i)=>{
                return <span className={` ${item.techColor ? `text-highlight bg-highlight/20 border-highlight/50 ` : "bg-primary/20 text-primary border-primary/50"}  rounded-md border py-1.5 px-3 text-xs`} key={i}>{tech}</span>
              })}
              </div>
              <div className='flex gap-6'>
                <a href={item.githubUrl} className='font-epilogue text-greytext bg-[#1E1E24] text-center py-3 w-full rounded-md transition-colors hover:text-white duration-500 inline-block'>⌥ GitHub</a>
                {item.liveUrl && <a href={item.liveUrl} className='font-epilogue bg-accent rounded-md text-center py-3 w-full inline-block'>Live Demo ↗</a>}
              </div>
            </div>
          </div>)
        })}
        </div>
    </section>
  )
}

export default Projects 