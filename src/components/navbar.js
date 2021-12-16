import * as React from 'react'
import { Link } from "gatsby"
import { useState, useEffect } from 'react'


const Navbar = () => {

  const [scrolling, setScrolling] = useState(false)

  useEffect( () => {

    window.onscroll = () => {

      const scrollPosY = window.scrollY || document.body.scrollTop
      if (scrollPosY > 30) setScrolling(true)
      else setScrolling(false)
      }
    }
  )
  
  return (
    <header className={`transition-padding duration-300 ease ${scrolling ? "pt-4 pb-3 md:pt-5 md:pb-4" : "pt-6 pb-7 md:pt-10 md:pb-9"}`}>
      <div className="flex items-center justify-between">
        
        <Link 
          className={`nav-link ghost-underline after:ease`}
          to="/"
        >
          Lorem Ipsum
        </Link>

        <div> 
           
          <ul className="hidden md:inline">
            
            <li key={4} className="inline ml-2 py-3 px-5">
              <Link
                className="nav-link ghost-underline after:ease"
                to="#experiences-anchor"
              >
                Experiences
              </Link>
            </li>
            
            <li key={3} className="inline ml-2 py-3 px-5">
              <Link
                className="nav-link ghost-underline after:ease"
                to="#projects-anchor"
              >
                Projects
              </Link>
            </li>

            <li key={2} className="inline ml-2 py-3 px-5">
              <Link
                className="nav-link ghost-underline after:ease"
                to="#about-anchor"
              >
                About
              </Link>
            </li>

            <li key={1} className="inline ml-2 py-3 px-5">
              <Link
                className="nav-link ghost-underline after:ease"
                to="/"
              >
                Contact
              </Link>
            </li>

          </ul>

          <button className="ml-3 py-2 px-5">
            <Link
              className="button-link"
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