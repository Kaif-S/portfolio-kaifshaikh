import React from 'react'
import ScrollReveal from './ui/ScrollReveal';


const Skill = ({array,title , duration , delay}:{array:string[],title:string , duration:number , delay:number}) => {
  return (
    <div>
          <ScrollReveal duration={duration} delay={delay}>
          <div className="flex gap-2 items-center justify-between mb-4">
            <span
              className="font-epilogue uppercase z-20 bg-[#0A0A0B] whitespace-nowrap  font-semibold text-global title-desector"
              style={{ letterSpacing: "4px" }}
            >
              {title}
            </span>
            <div className="w-full h-px bg-global/30"></div>
          </div>{" "}
            <div className="flex gap-2">
              {array.map((index :string, i : number) => {
                return (
                  <div
                    key={i}
                    className="bg-[#1E1E24] px-4 py-2 font-dm-sans  w-fit mr-4 text-global rounded-lg border border-global/40 transition-all duration-300 hover:text-primary hover:border-primary hover:-translate-y-1"
                  >
                    {index}
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
  )
}

export default Skill