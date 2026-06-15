"use client"
import React from 'react'
import {motion} from 'motion/react'


interface wrapperprops {
    children: React.ReactNode
    delay : number
    duration : number
}

const ScrollReveal = ({children , delay,duration = 0.2}:wrapperprops) => {
  return (
    <motion.div
    
    initial={{opacity:0,y:60}}
    whileInView={{opacity:1,y:0}}
    transition={{delay:delay,duration:duration}}
    >
        {children}
    </motion.div>
  )
}

export default ScrollReveal 