import * as React from 'react'
import { Link } from "gatsby"

const Navbar = ({anchorLinks}) => {
  
  return (
    <header className="transition-padding duration-300 ease py-6 md:py-8">
      <div className="flex items-center justify-between">
        
        <Link 
          className="px-1"
          name="Home"
          to="/"
        >
          <svg width="43" height="64" viewBox="0 0 43 64">
            <path transform="translate(6.901 58.629)" d="M4.063-19.635a.5.5,0,0,1-.368-.142.5.5,0,0,1-.143-.366V-33.368a.5.5,0,0,1,.143-.366.5.5,0,0,1,.368-.142H6.331a.5.5,0,0,1,.368.142.5.5,0,0,1,.143.366v11.006h6.335a.5.5,0,0,1,.368.142.5.5,0,0,1,.143.366v1.709a.5.5,0,0,1-.143.366.5.5,0,0,1-.368.142Zm16.655.2a8.285,8.285,0,0,1-3.28-.57,4.73,4.73,0,0,1-1.992-1.485,3.474,3.474,0,0,1-.715-1.953.424.424,0,0,1,.123-.295.4.4,0,0,1,.307-.132h2.187a.651.651,0,0,1,.409.112,1.464,1.464,0,0,1,.266.275,2.153,2.153,0,0,0,.46.671,2.4,2.4,0,0,0,.869.539,3.816,3.816,0,0,0,1.369.214,3.73,3.73,0,0,0,1.992-.427,1.317,1.317,0,0,0,.664-1.16,1.1,1.1,0,0,0-.358-.854,3.277,3.277,0,0,0-1.124-.59q-.766-.264-2.033-.57a11.506,11.506,0,0,1-2.606-.844,3.9,3.9,0,0,1-1.614-1.343,3.645,3.645,0,0,1-.542-2.045,3.639,3.639,0,0,1,.674-2.167,4.481,4.481,0,0,1,1.9-1.485A7.225,7.225,0,0,1,20.6-34.08a7.356,7.356,0,0,1,2.422.366,5.552,5.552,0,0,1,1.757.956A4.458,4.458,0,0,1,25.847-31.5a2.906,2.906,0,0,1,.388,1.3.424.424,0,0,1-.123.295.4.4,0,0,1-.307.132H23.518a.814.814,0,0,1-.368-.081.606.606,0,0,1-.266-.285,1.553,1.553,0,0,0-.725-.926,2.8,2.8,0,0,0-1.563-.4,2.957,2.957,0,0,0-1.584.366,1.231,1.231,0,0,0-.582,1.119,1.2,1.2,0,0,0,.3.824,2.425,2.425,0,0,0,1,.59q.705.254,1.87.559a14.009,14.009,0,0,1,2.922.875,3.782,3.782,0,0,1,1.655,1.312,3.6,3.6,0,0,1,.531,2.024,3.675,3.675,0,0,1-.766,2.34,4.812,4.812,0,0,1-2.1,1.5A8.6,8.6,0,0,1,20.718-19.432Z" fill="#efefef" />
            <path transform="translate(0 10.596)" d="M21.5,3.391A18.013,18.013,0,1,0,39.594,21.4,18.074,18.074,0,0,0,21.5,3.391M21.5,0A21.4,21.4,0,1,1,0,21.4,21.452,21.452,0,0,1,21.5,0Z" fill="#efefef" />
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

          <Link
            to="/"
          >
            <button className="ml-3 px-5">
              Resume
            </button>
          </Link>

        </div>

      </div>
    </header>
  )
}

export default Navbar