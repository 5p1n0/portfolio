import * as React from 'react'
import Headroom from 'react-headroom'
import Navbar from './navbar'
import Footer from './footer'

const Layout = ({children}) => {

  return (
    <div className="bg-dark-gray">   
      <Headroom>
        <Navbar />
      </Headroom>  
      <main className="grid grid-cols-[16px_1fr] md:md:grid-cols-[minmax(16px,0.5fr)_minmax(375px,1fr)_0.5fr]">{children}</main>
      <Footer />
    </div>
  )

}

export default Layout