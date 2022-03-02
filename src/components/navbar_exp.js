import * as React from 'react'
import { Link } from "gatsby"

const NavbarExp = () => {
  
  return (
    <header className="transition-padding duration-300 ease pt-6 pb-7 md:pt-10 md:pb-9">
      <div className="flex items-center justify-between">
        
        <Link 
          className="nav-link ghost-underline"
          to="/"
        >
          Lorem Ipsum
        </Link>

        <div> 
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

export default NavbarExp