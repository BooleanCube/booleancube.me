import React from "react";
import { TypeAnimation } from 'react-type-animation';
import HollowButton from "./HollowButton";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-start container mx-auto px-4"
    >
      <h3 className="text-secondary font-work text-xl">Hey there! I am</h3>
      <h1 className="text-6xl font-bold">BooleanCube</h1>

      <h2 className="text-3xl md:text-5xl font-bold text-text">
        <TypeAnimation
          sequence={[
            "a Software Developer.", 3000,
            "a Competitive Programmer.", 3000,
            "an OSS Contributor.", 3000,
            "an Avid Researcher.", 3000,
            "a QA Volunteer.", 3000,
            "an Astronomy Enthusiast.", 3000,
            "a Competitive Athlete.", 3000,
            "a Huge Weeb.", 3000
          ]}
          speed={20}
          repeat={Infinity}
        />
      </h2>
      <p className="py-2 mt-2 max-w-2xl">
        Fueled by curiosity, creativity, and an endless love for problem-solving.
      </p>
      <div className="py-2 flex justify-normal container space-x-4">
        <HollowButton hrefValue="#about" content="About Me" fancy />
        <HollowButton hrefValue="#skills" content="Skills" fancy />
        <HollowButton hrefValue="#experience" content="Experience" fancy />
      </div>
    </section>
  );
};

export default Hero;