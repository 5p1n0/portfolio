import * as React from 'react'
import { Link } from "gatsby"

const Navbar = () => {
  
  return (
    <header className="transition-padding duration-300 ease pt-6 pb-7 md:pt-10 md:pb-9">
      <div className="flex items-center justify-between">
        
        <Link 
          className={`nav-link ghost-underline `}
          to="/"
        >
          Lorem Ipsum
        </Link>

        <div> 
           
          <ul className="hidden lg:inline">
            
            <li key={4} className="inline ml-2 px-4">
              <Link
                className="nav-link ghost-underline "
                to="#experiences"
              >
                Experiences
              </Link>
            </li>
            
            <li key={3} className="inline ml-2 px-4">
              <Link
                className="nav-link ghost-underline "
                to="#projects"
              >
                Projects
              </Link>
            </li>

            <li key={2} className="inline ml-2 px-4">
              <Link
                className="nav-link ghost-underline "
                to="#about"
              >
                About
              </Link>
            </li>

            <li key={1} className="inline ml-2 px-4">
              <Link
                className="nav-link ghost-underline "
                to="#contact"
              >
                Contact
              </Link>
            </li>

          </ul>

          <button className="ml-3 px-5">
            <Link
              to="/"
            >
              Resume
            </Link>
          </button>

        </div>

      </div>
    </header>
  )
}

export default Navbar