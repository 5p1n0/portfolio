import * as React from 'react'
import Headroom from 'react-headroom'
import Footer from './footer'
import Navbar from './navbar'

const Layout = ({gridLayout, isIndex, children}) => {

  return (
    <div className="bg-dark-gray">   
      <Headroom className='relative z-30'>
        <Navbar anchorLinks={isIndex} />
      </Headroom>  
      <main className={`grid ${gridLayout}`}>{children}</main>
      <Footer />
    </div>
  )

}

export default Layout