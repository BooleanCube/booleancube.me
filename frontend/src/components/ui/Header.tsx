import React from "react"
import { Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import Navbar from "./Navbar";

import LogoImage from "../../assets/booleancube.png"

const Header: React.FC = () => {
  const Logo: React.FC = () => {
    return (
      <div className="glow-container">
        <Link to="/" className="flex items-center gap-2 logo" data-no-underline>
          <Image src={LogoImage} width="3rem" />
          <h1 className="text-xl font-bold">BooleanCube</h1>
        </Link>
      </div>
    )
  }

  return (
    <header className="py-6 md:py-8">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />
        <Navbar />
      </div>
    </header>
  )
};

export default Header;