import * as React from 'react'
import Headroom from 'react-headroom'
import Footer from './footer'
import Navbar from './navbar'

const Layout = ({gridLayout, children}) => {

  return (
    <div className="bg-dark-gray">   
      <Headroom className='relative z-30'>
        <Navbar />
      </Headroom>  
      <main className={`grid ${gridLayout}`}>{children}</main>
      <Footer />
    </div>
  )

}

export default Layout