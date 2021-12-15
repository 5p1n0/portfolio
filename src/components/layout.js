import * as React from 'react'
import Navbar from './navbar'
import Footer from './footer'

const Layout = ({children}) => {

  return (
    <div className="bg-dark-gray">     
      <Navbar />
      <main className="grid grid-cols-[16px_1fr] sm:grid-cols-[minmax(16px,0.5fr)_minmax(375px,1fr)_0.5fr]">{children}</main>
      <Footer />
    </div>
  )

}

export default Layout