"use client"

import React, { useState } from "react"
import { Link } from "@chakra-ui/react"
// import { Menu } from "@chakra-ui/react"

import Button from "./StyledButton"

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    console.log("im in");
    setIsOpen(!isOpen);
  };

  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Blogs",
      path: "/blogs",
    },
    {
      name: "Resources",
      path: "/resources",
    },
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex">
        <nav className="flex gap-3 xl:gap-6">
          {links.map((link, index: number) => {
            return (
              <h3 key={index}>
                <Link href={link.path} className="text-primary hover:text-accent">
                  <span className="text-secondary">0{index+1}.</span> {link.name}
                </Link>
              </h3>
            )
          })}
          <Button hrefValue="#contact" content="Archive" fancy={false} />
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="block focus:outline-none"
        >
          <span className="hamburger-line block w-6 h-0.5 bg-secondary mb-1"></span>
          <span className="hamburger-line block w-6 h-0.5 bg-secondary mb-1"></span>
          <span className="hamburger-line block w-6 h-0.5 bg-secondary"></span>
        </button>
        <nav
          className={`absolute left-0 w-full flex justify-between items-center gap-4 py-6 px-4 transform transition-transform duration-300 ${
            isOpen ? "" : "hidden"
          }`}
        >
          {links.map((link, index) => (
            <h3 key={index}>
              <Link
                href={link.path}
                className="text-primary hover:text-accent text-lg"
              >
                <span className="text-secondary">0{index + 1}.</span> {link.name}
              </Link>
            </h3>
          ))}
          <Button hrefValue="#contact" content="Archive" fancy={false} />
        </nav>
      </div>
    </>
  )
};

export default Navbar;