import React from "react";
import { TypeAnimation } from 'react-type-animation';
import Button from "@/components/ui/StyledButton";
import Model from "./Model";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="100vh mx-auto max-w-2xl lg:max-w-7xl px-8 flex flex-col md:flex-row items-center"
    >
      <div className="flex flex-col justify-center items-start container">
        <h3 className="text-secondary font-jetbrains text-xl">Hey there! I am</h3>
        <h1 className="text-6xl font-bold">BooleanCube</h1>

        <h2 className="text-3xl md:text-4xl font-bold text-text">
          <TypeAnimation
            sequence={[
              4000,
              "a Software Developer.", 3000,
              "a Competitive Programmer.", 3000,
              "an OSS Contributor.", 3000,
              "an Avid Researcher.", 3000,
              "an Astronomy Enthusiast.", 3000,
              "a Competitive Athlete.", 3000,
              "a Huge Weeb.", 3000
            ]}
            speed={20}
            repeat={Infinity}
          />
        </h2>
        <p className="py-2 mt-4 max-w-2xl">
          Fueled by curiosity, creativity, and an endless love for problem-solving.
        </p>
        <div className="py-2 flex justify-normal gap-4">
          <Button hrefValue="#about" content="About" fancy />
          <Button hrefValue="#skills" content="Skills" fancy />
          <Button hrefValue="#experience" content="Experience" fancy />
          <Button hrefValue="#contact" content="Contact" fancy />
        </div>
      </div>
      
      <Model />
    </section>
  );
};

export default Hero;