import * as React from 'react'
import SEO from '../components/SEO'
import { Link } from 'gatsby'

const NotFoundPage = () => {
  return (

    <main className='grid justify-items-center items-center h-screen bg-dark-gray'>

      <SEO 
        title="404: Not Found"
        description=''
      />

      <div className='flex flex-col p-4'>

        <div className='flex items-center'>
          <p className='px-4 border-r-2 border-vivid-orange text-3xl bold font-heading text-vivid-orange relative'>404</p>
          <p className='px-4 text-xl text-vivid-orange font-heading'>Page Not Found</p>
        </div>

        <Link
          className='self-center'
          to="/"
        >
          <button className="xs:px-6 xs:py-4">
            Back to homepage
          </button>
        </Link>

      </div>

    </main>
  )
}

export default NotFoundPage