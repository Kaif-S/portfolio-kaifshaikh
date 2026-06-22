import React from "react";
import { skills } from "@/lib/data";
import Skill from "../Skill";

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
        <Skill delay={0.1} duration={0.4} array={skills.Frontend} title="frontend"/>
        <Skill delay={0.1} duration={0.4} array={skills.Backend} title="backend"/>
        <Skill delay={0.1} duration={0.4} array={skills.Database} title="database"/>
        <Skill delay={0.1} duration={0.4} array={skills["Machine Learning"]} title="machine learning"/>
        <Skill delay={0.1} duration={0.4} array={skills["Tools & Platforms"]} title="tools & platforms"/>
        {/* <Skill delay={0.1} duration={0.4} array={skills.Devops} title="Devops"/> */}
      </div>
    </section>
  );
};

export default SkillSection;
