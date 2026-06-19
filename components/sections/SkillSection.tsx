import React from "react";
import { skills } from "@/lib/data";
import ScrollReveal from "../ui/ScrollReveal";

const SkillSection = () => {
  return (
    <section id="skills-section" className="lg:px-28 bg-[#0A0A0B] py-20">
      <h3
        style={{ letterSpacing: "4px" }}
        className="text-accent uppercase font-epilogue font-semibold"
      >
        Expertise
      </h3>
      <div className="my-4">
        <h2
          style={{ fontStretch: "expanded" }}
          className="font-black font-epilogue lg:text-6xl md:text-2xl text-lg text-white"
        >
          Tech <span className="text-accent">Stack</span>
        </h2>
        <p className="text-global font-light w-xl mt-3">
          A curated toolkit for building production-ready applications from
          frontend to ML pipeline.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <div>
          <ScrollReveal duration={0.4} delay={0}>
          <div className="flex gap-2 items-center mb-4">
            <h4
              className="font-epilogue uppercase w-fit font-semibold text-global title-desector"
              style={{ letterSpacing: "4px" }}
            >
              Frontend
            </h4>
            <div className="w-full h-px bg-global/30"></div>
          </div>{" "}
            <div className="flex gap-2">
              {skills.Frontend.map((index, i) => {
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
      </div>
    </section>
  );
};

export default SkillSection;
