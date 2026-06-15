import React from "react";
import ScrollReveal from "../ui/ScrollReveal";

const About = () => {
  const cardDATA = [
    {number:2,lable:"years learning"},
    {number:12,lable:"projects built"},
    {number:20,lable:"technologies"},
    {number:2,lable:"open source"},
  ]
  return (
    <section className="bg-[#111114] py-30" id="about-section">
      <ScrollReveal delay={0.4} duration={0.8}>
      <h2 className="uppercase lg:mx-28 font-dm-sans text-xl text-gray-400">
        about me
      </h2>
      <div className="flex lg:mx-28 gap-6 justify-center items-center">
        <div className="flex flex-col gap-8 mt-4">
          <h3 className="font-bold lg:text-7xl text-white font-epilogue">
            Building things <br />
            that <span className="text-primary">matter</span>.
          </h3>
          <p className="w-2xl text-lg text-gray-400 font-dm-sans font-light">I&apos;m a developer focused on creating <span className="text-white font-medium">fast, scalable, and user-friendly applications.</span> My interests include full-stack development, machine learning, web scraping, automation, and building products that provide real value.</p>
          <p className="w-2xl text-lg text-gray-400 font-dm-sans font-light">I approach every project with attention to detail, clean architecture, and an eye for design that converts users into advocates.</p>
        </div>
        <div className="grid grid-cols-2 w-full gap-6 ">
          {cardDATA.map((item,index)=>{
            return (<div
            
              className="flex gap-2 bg-[#18181C] relative hover:-translate-y-2 isolate transition-all duration-500 animatedCARD rounded-xl flex-col border-[0.5px] border-[#545454]/30 px-8 py-6"

            key={index}>
              <span className="text-accent text-5xl font-bold font-epilogue">{item.number}+</span>
              <span className="font-light uppercase text-[#5C5B58]">{item.lable}</span>
            </div>)
          })}
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
};

export default About;
