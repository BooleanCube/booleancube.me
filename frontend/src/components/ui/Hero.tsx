import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-start container mx-auto px-4"
    >
      <p className="text-secondary">Hi, my name is</p>
      <h1 className="text-4xl md:text-6xl font-bold mb-4">BooleanCube.</h1>
      <h2 className="text-3xl md:text-5xl font-bold text-text">I build things.</h2>
      <p className="mt-6 max-w-2xl">
        I'm a software engineer. yada yada yada...
      </p>
      <a
        href="#projects"
        className="mt-8 px-6 py-3 border border-primary rounded hover:bg-secondary"
      >
        Check out my work
      </a>
    </section>
  );
};

export default Hero;