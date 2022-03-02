import * as React from 'react'
import Headroom from 'react-headroom'
import Footer from './footer'
import NavbarIndex from './navbar_index'

const LayoutIndex = ({children}) => {

  return (
    <div className="bg-dark-gray">   
      <Headroom>
        <NavbarIndex />
      </Headroom>  
      <main className="grid grid-cols-[16px_1fr] md:grid-cols-[minmax(16px,0.2fr)_minmax(375px,1fr)] xl:grid-cols-[minmax(16px,0.5fr)_minmax(375px,1fr)_0.5fr]">{children}</main>
      <Footer />
    </div>
  )

}

export default LayoutIndex