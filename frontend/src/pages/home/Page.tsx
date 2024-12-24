import React from "react";

import Hero from "./Hero"
import About from "./About"

const Home: React.FC = () => {
  return (
    <div className="mx-auto px-8">
      <Hero />
      <About />
    </div>
  )
}

export default Home;