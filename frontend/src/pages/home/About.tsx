import React from "react";
import { Image } from "@chakra-ui/react";
import Flick from "@/assets/booleancube.png"

const About: React.FC = () => {
  return (
    <section id="about" className="container mx-auto px-4 py-24 mt-24">
      <h2 className="text-3xl font-bold">About Me</h2>
      <div className="mt-6 flex flex-col md:flex-row items-center">
        <p className="max-w-xl">
        Hi, I'm Samarth Upadhya, a passionate software developer and tech enthusiast from United States. 
        I specialize in crafting efficient and scalable solutions, with a keen interest in competitive programming, 
        open-source contributions, and full-stack development.
        </p>
        <Image
          src={Flick}
          alt="Samarth Upadhya"
          className="w-64 h-64 rounded-full mt-6 md:mt-0 md:ml-10"
        />
      </div>
    </section>
  );
};

export default About;
