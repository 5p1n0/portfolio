import * as React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"


const Navbar = ({anchorLinks}) => {
  
  const data = useStaticQuery(graphql`
    {
      allFile(filter: {extension: {eq: "pdf"}}) {
        nodes {
          name
          publicURL
        }
      }
    }
  `)

  return (
    <header className="transition-padding duration-300 ease py-4 md:py-6">
      <div className="flex items-center justify-between">
        
        <Link 
          className="px-1"
          to="/"
        >
          <svg aria-label='Home' width="48" height="64" viewBox="0 0 477 249.59" className='transition-colors duration-200 fill-light-gray hover:fill-vivid-orange'>
            <g>
              <path d="M149.79,22q-21.33,0-43.14,52.21L80.23,141Q55.08,204.87,32,224.92q33.11-11.61,77.52-15.44,6.36-.63,12.41-.64a47.31,47.31,0,0,1,13,2,35,35,0,0,1,12,6q11,8.59,11,24.2,0,8.59-6.37,8.59a14.57,14.57,0,0,1-6.85-1.75,68.94,68.94,0,0,0-7.56-3.34,93.43,93.43,0,0,0-9.79-3,102.64,102.64,0,0,0-26.18-3.35A178.73,178.73,0,0,0,75.29,240q-12.42,1.83-23.4,3.9l-20.53,4a84.45,84.45,0,0,1-14.25,1.75q-4.86,0-7.48-2.14A24.81,24.81,0,0,1,4.78,242Q0,234.63,0,230q0-7.47,3.5-9.55,13.7-7.32,30.88-56.82,15.92-45.85,21.73-61.45T68.92,71.71A263.47,263.47,0,0,1,84.13,43.77,125,125,0,0,1,102.19,21Q123.37,0,148.83,0q18,0,30.25,15.44a51.6,51.6,0,0,1,11.14,32.79q0,25.31-18.78,52.37-11,15.77-23.72,22.92-6.21,3.35-11.22,3.35a18.82,18.82,0,0,1-8.84-2A27.24,27.24,0,0,1,121,120q-5.9-6.21-5.89-11.22c0-3.34.84-5.54,2.54-6.61a127.26,127.26,0,0,0,32.64-28.65q14.47-18,14.48-34.78T149.79,22Z" />
              <path d="m190.94 242.59a26.25 26.25 0 0 1-5.65-8 24.89 24.89 0 0 1-2.07-10.59 23.85 23.85 0 0 1 2.3-10.66 22.35 22.35 0 0 1 5.81-7.56 20.39 20.39 0 0 1 13.14-5.09 62 62 0 0 1 11.78 1 38.12 38.12 0 0 1 9.15 3q9.87 5.08 9.87 14.64a30.66 30.66 0 0 1-7.8 20.85q-7.33 8.28-15.2 9.08c-5.26 0.52-9.53 0.13-12.82-1.2a25.56 25.56 0 0 1-8.51-5.47z" />
              <path d="M303.56,186.08l-1.44,12.26q0,19.26,12.9,26.26A22.29,22.29,0,0,0,325.68,227a27.67,27.67,0,0,0,11.14-2.15,24.4,24.4,0,0,0,14.81-22.2,37.69,37.69,0,0,0-3.82-17,101.11,101.11,0,0,0-9.55-15.28l-12.74-15.6q-15.43-18.47-20.69-33.66t-5.25-27.94A91.31,91.31,0,0,1,302.68,69a100.63,100.63,0,0,1,8.68-21.64,96,96,0,0,1,13.37-18.87,88.12,88.12,0,0,1,17.35-14.8Q362,.32,381.55.32t30.57,5.41a51.61,51.61,0,0,1,17.67,13.69Q442.2,35,442.2,57.15a70.49,70.49,0,0,1-11.62,38.68q-10.66,16.55-23.88,21a17.91,17.91,0,0,1-7.87,1.43,20.82,20.82,0,0,1-8.44-1.51,19.42,19.42,0,0,1-6-4.06q-5.58-5.57-5.57-12.1,0-4.45,2.7-5.89a62.27,62.27,0,0,0,21-18.94q9.71-13.53,10.18-27t-6.44-19.9q-6.93-6.45-18.39-6.45a41.57,41.57,0,0,0-20.69,5.18,51.66,51.66,0,0,0-15.92,13.93Q337,60.33,337,86q0,17,11.78,36,4.94,8.12,10.75,16t10.9,16.16Q382,173.35,382,188.63t-5.49,25.79A61.54,61.54,0,0,1,362,232.72Q342.4,249.6,317.4,249.59q-23.55,0-36.29-14-10.19-11.31-10.19-24.52,0-14.32,8.12-24.19Q285.25,179.4,291,178,303.55,174.61,303.56,186.08Z" />
              <path d="m433.53 242.59a26.25 26.25 0 0 1-5.65-8 24.89 24.89 0 0 1-2.07-10.59 23.85 23.85 0 0 1 2.3-10.66 22.35 22.35 0 0 1 5.81-7.56 20.39 20.39 0 0 1 13.14-5.09 62 62 0 0 1 11.78 1 38.12 38.12 0 0 1 9.15 3q9.87 5.08 9.87 14.64a30.66 30.66 0 0 1-7.8 20.85q-7.33 8.28-15.2 9.08c-5.26 0.52-9.53 0.13-12.82-1.2a25.56 25.56 0 0 1-8.51-5.47z" />
            </g>
          </svg>
        </Link>

        <div> 
           
          <ul className={`${anchorLinks? `hidden lg:inline` : `hidden`}`}>
            
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

          <a
            href={data.allFile.nodes[0].publicURL}
            target="_blank"
            rel='noreferrer'
          >
            <button className="ml-3 px-5">
              Resume
            </button>
          </a>

        </div>

      </div>
    </header>
  )
}

export default Navbar