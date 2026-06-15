"use client"
import { themes } from '@/lib/theme';
import React , {useState , useEffect, useRef}from 'react'

const ThemeSwitcher = () => {
    const [Theme, setTheme] = useState<number>(0)
    const element = useRef<HTMLElement|null>(null)
    useEffect(()=>{
      element.current = document.documentElement
    },[])

    const handlethemechange = (id:number)=>{
        console.log(themes[id]);
        setTheme(id)
        if (element.current !=null){
        element.current.style.setProperty("--color-primary",themes[id].primary)
        element.current.style.setProperty("--color-secondary",themes[id].secondary)
        element.current.style.setProperty("--color-accent",themes[id].accent)
        element.current.style.setProperty("--color-warm",themes[id].warm)
        element.current.style.setProperty("--color-highlight",themes[id].highlight)
        }
    }
  return (
    <div className='fixed right-4 bottom-6 flex-col gap-6 flex'>
    {themes.map((element,id)=>{
     return <button key={id} onClick={()=>handlethemechange(id)} style={{backgroundColor:themes[id].primary}} className={`cursor-pointer ${Theme===id&&'ring-3 ring-accent/70'} transition-all duration-300 hover:scale-110 rounded-full lg:size-10`}></button> 
    })}
   </div>
  )
}

export default ThemeSwitcher