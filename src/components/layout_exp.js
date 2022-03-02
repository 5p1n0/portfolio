import * as React from 'react'
import Headroom from 'react-headroom'
import Footer from './footer'
import NavbarExp from './navbar_exp'

const LayoutExp = ({children}) => {

  return (
    <div className="bg-dark-gray">   
      <Headroom>
        <NavbarExp />
      </Headroom>  
      <main className="grid grid-cols-[16px_1fr_16px] md:grid-cols-[minmax(16px,0.5fr)_minmax(375px,1fr)_minmax(16px,0.5fr)]">{children}</main>
      <Footer />
    </div>
  )

}

export default LayoutExp