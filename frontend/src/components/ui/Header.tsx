import React from "react"
import { Link, Image } from "@chakra-ui/react"

import Logo from "../../assets/booleancube.png"
import HollowButton from "./HollowButton"

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 w-full z-50">
      <nav className="container mx-auto flex justify-between items-center py-4">
        
        <Link href="." className="flex items-center" data-no-underline>
          <Image src={Logo} width="8%" className="px-1" />
          <h1 className="text-xl font-bold px-1">BooleanCube</h1>
        </Link>

        <ul className="flex space-x-6">
          <li>
            <h3><a href="#about" className="text-primary hover:text-accent">
              <span className="text-secondary">01.</span> Home
            </a></h3>
          </li>
          <li>
            <h3><a href="#experience" className="text-primary hover:text-accent">
              <span className="text-secondary">02.</span> Projects
            </a></h3>
          </li>
          <li>
            <h3><a href="#projects" className="text-primary hover:text-accent">
              <span className="text-secondary">03.</span> Blogs
            </a></h3>
          </li>
          <li>
            <h3><a href="#contact" className="text-primary hover:text-accent">
              <span className="text-secondary">04.</span> Resources
            </a></h3>
          </li>
          <li>
            <HollowButton hrefValue="#contact" content="Contact" fancy={false} />
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;