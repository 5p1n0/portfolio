import * as React from 'react'
import { Link } from 'gatsby'
import { Circle } from 'react-feather'
import Layout from '../components/layout'
import Projects from '../components/projects'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout>

      <Seo />

      <div className="col-span-full mb-[5%]"></div>

      <div className="col-start-1 relative trunk"></div>

      <section className="col-start-2 text-left near-trunk mb-[22%]">

        <div className="circle">

          <Circle 
            className="bg-dark-gray self-center relative z-20"
            color="#464646"
            size="1rem"
          />

          <h1 className="text-vivid-orange">
            Hi,
          </h1> 

        </div> 

        <h1 className="text-light-gray mb-5 xs:mb-10 md:mb-14">
            I'm Luca,<br/> a web developer.
        </h1> 
        
        <div className="relative overflow-hidden 2xl:overflow-visible">

          <p className="md:mb-20 md:max-w-lg lg:max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus.
          </p>

          <svg className="cover" width="598" height="241" viewBox="0 0 598 241" xmlns="http://www.w3.org/2000/svg">
            <g id="Rettangoli_Copertina" transform="translate(-756 -432)" fill="none" stroke="#464646" data-name="Rettangoli Copertina">
              <g id="Rectangle_10" transform="translate(756 432)" data-name="Rectangle 10">
                <rect width="544" height="181" rx="8" stroke="none" />
                <rect x=".5" y=".5" width="543" height="180" rx="7.5" fill="none" />
              </g>
              <g id="Rectangle_11" transform="translate(783 461)" data-name="Rectangle 11">
                <rect width="544" height="181" rx="8" stroke="none" />
                <rect x=".5" y=".5" width="543" height="180" rx="7.5" fill="none" />
              </g>
              <g id="Rectangle_12" transform="translate(810 492)" data-name="Rectangle 12">
                <rect width="544" height="181" rx="8" stroke="none" />
                <rect x=".5" y=".5" width="543" height="180" rx="7.5" fill="none" />
              </g>
            </g>
          </svg>

        </div>

        
        <button className="xs:px-6 xs:py-4">
          <Link
            className="button-link"
            to="/"
          >
            Contact Me
          </Link>
        </button>

        <div id="experiences" className="invisible"></div>
      </section>

      <div className="col-start-1 relative trunk"></div>

      <section className="col-start-2 text-left near-trunk mb-[10%]">

        <div className="circle mb-5 xs:mb-10 md:mb-14">

          <Circle 
            className="bg-dark-gray self-center relative z-20"
            color="#464646"
            size="1rem"
          />

          <h2>
            My experiences
          </h2>

        </div> 
        

        <div className="box bg-dark-gray-light max-w-[90%] h-40 xs:h-52 md:h-64 lg:h-72">
          <div className="inner-box box top-[10%] left-[6%] md:top-[8%] md:left-[4%]"></div>
        </div>

        <div id="projects" className="invisible"></div>

      </section>

      <div className="col-start-1 relative trunk"></div>

      <section className="col-start-2 text-left mb-[7%]">
        <div className="flex items-center">
          
          <svg 
            className="flex w-[12%] md:w-[81.429] stroke-current text-dark-gray-light bg-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 81.429 637.26"
          >
            <path 
              d="m479.98 1474.4c0 59.084 80.429 72.729 80.429 137.88v341.52c0 68.815-80.429 75.217-80.429 157.86" 
              fill="none"
              transform="translate(-479.48 -1474.4)"
            ></path>
          </svg>         

          <div className="grow shrink">
            
            <div className="flex gap-2 -ml-2 md:gap-4 md:-ml-2 mb-5 xs:mb-10 md:mb-14">
              
              <Circle 
                className="self-center bg-dark-gray relative z-10"
                color="#464646"
                size="1rem"
              />

              <h3>Other projects</h3>

            </div>

            <div className="block near-trunk box bg-dark-gray-light h-28 max-w-[80%] xs:h-36 xs:max-w-[70%] md:h-56 md:max-w-[80%]"></div>
            
            <div id="about" className="invisible"></div>

          </div>

        </div>
      </section>

      <div className="col-start-1 relative trunk"></div>

      <section className="col-start-2 text-left near-trunk mb-[10%]">

        <div className="circle mb-5 xs:mb-10 md:mb-14">

          <Circle 
            className="bg-dark-gray self-center relative z-20"
            color="#464646"
            size="1rem"
          />

          <h2>
            About me
          </h2>

        </div> 

        <div className="float-right box bg-dark-gray-light hidden mr-4 xl:mr-6 xl:ml-6 xl:block xl:h-40 xl:w-40 2xl:h-72 2xl:w-72">
          <div className="inner-box box top-[8%] left-[8%]"></div>
        </div>        

        <p className="md:mb-8 md:max-w-xs lg:max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec ornare libero, quis facilisis risus. Vestibulum ac arcu ligula. In vel lacinia mi. Donec molestie vitae ligula ut sodales.
        </p>

        <p className="md:mb-8 md:max-w-xs lg:max-w-md">
          Vestibulum ac arcu ligula.<br/> In vel lacinia mi:
        </p>

        <ul className="list-disc list-outside marker:text-lg ml-4 md:ml-3 mb-10 xs:mb-14 md:mb-10 md:max-w-xs lg:max-w-sm">
          
          <li className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>

          <li className="mb-6">Integer nec ornare libero, quis facilisis risus.</li>

          <li className="mb-6">Donec molestie vitae ligula ut sodales.</li>

        </ul>

        <button className="xs:px-6 xs:py-4">
          <Link 
            className="button-link"
            to="/"
          >
            Contact Me
          </Link>
        </button>

        <div id="contact" className="invisible"></div>

      </section>

      <section className="col-span-full mx-4 before:absolute before:z-10 before:h-px before:w-11/12 before:bg-dark-gray-light">
        <div className="grid justify-items-center text-center">

          <div className="mb-[15%] md:mb-[5%]"></div>

          <h3 className="mb-8 md:mb-14">Get in touch</h3>

          <p className="max-w-screen-sm mb-13">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec ornare libero, quis facilisis risus. Vestibulum ac arcu ligula.</p>

          <button className="mb-20 md:mb-28 xs:px-6 xs:py-4">
            <Link
              className="button-link"
              to="/"
            >
              Let's Talk
            </Link>
          </button>

          <p className="mb-6">Bologna - Italy</p>

          <p className="mb-[9%] underline text-vivid-orange">+39 111 223344<br />lucaspinosi@gmail.com</p>

        </div>
      </section>


    </Layout>
  )
}

export default IndexPage