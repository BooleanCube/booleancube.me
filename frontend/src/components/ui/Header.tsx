import React from "react"

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 w-full z-50">
      <nav className="container mx-auto flex justify-between items-center py-4">
        <h1 className="text-lg font-bold">BooleanCube</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="hover:text-primary">About</a>
          </li>
          <li>
            <a href="#experience" className="hover:text-primary">Experience</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-primary">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </li>
        </ul>
        <a
          href="/resume.pdf"
          className="border border-primary px-4 py-2 rounded hover:bg-secondary"
        >
          Resume
        </a>
      </nav>
    </header>
  )
};

export default Header;