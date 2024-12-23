import React from "react"
import { Link, Image } from "@chakra-ui/react"
import Navbar from "./Navbar";
// import { useLocation }

import LogoImage from "../../assets/booleancube.png"

const Header: React.FC = () => {
  const Logo: React.FC = () => {
    return (
      <div className="glow-container">
        <Link href="/" className="flex gap-2 logo" data-no-underline>
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