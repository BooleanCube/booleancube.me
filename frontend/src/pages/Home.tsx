import React from "react";

import Hero from "@/components/ui/Hero"
import About from "@/components/ui/About"

const Home: React.FC = () => {
  return (
    <div className="mx-auto px-8">
      <Hero />
      <About />
    </div>
  )
}

export default Home;