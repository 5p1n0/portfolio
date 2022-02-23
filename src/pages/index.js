import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Circle, GitHub } from 'react-feather'
import Layout from '../components/layout'
import Projects from '../components/projects'
import Seo from '../components/seo'




const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query GitHub{
      githubData {
        data {
          user {
            id
            repositories {
              edges {
                node {
                  description
                  name
                  forkCount
                  primaryLanguage {
                    color
                    name
                  }
                  stargazers {
                    totalCount
                  }
                  url
                }
              }
            }
          }
        }
      }  
    }
  `);


  return (
    <Layout>

      <Seo />

      <div className="col-span-full mb-[5%]"></div>

      <div className="col-start-1 relative trunk"></div>

      <section className="col-start-2 text-left ml-6 mb-[22%]">

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
          I'm Luca,<br /> a web developer.
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
            to="/"
          >
            Contact Me
          </Link>
        </button>

        <div id="experiences" className="invisible"></div>
      </section>

      <div className="col-start-1 relative trunk"></div>

      <section className="col-start-2 text-left ml-6 mb-[22%] xs:mb-[12%]">

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

      <section className="col-start-2 text-left mb-[22%] xs:mb-[10%]">

        <svg
          className="hidden xs:block w-[12%] stroke-dark-gray-light mb-6"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          fill="none"
          viewBox="0 0 110 142"
        >
          <path d="m1-8c0 75 108 75 108 150" stroke-width="1" vector-effect="non-scaling-stroke" />
        </svg>

        
        <div className="flex gap-4 -ml-2 mb-5 xs:ml-[11%] xs:mb-8">

          <svg 
            className="fill-dark-gray-light bg-dark-gray self-center relative z-20 h-[24px] w-[20px]" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 28 32" 
          >
            <g>
              <path d="m17.8 24.4h-11c-.6 0-1.1-.5-1.1-1.1v-1.3c0-.8.6-1.4 1.4-1.4h7.2c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-7.3c-.5 0-.9.1-1.4.3v-12.3c0-.6.5-1.1 1.1-1.1h13.6v6.9c0 .5.4.9.9.9s.9-.4.9-.9v-7.8c0-.5-.4-.9-.9-.9h-14.4c-1.6 0-2.9 1.3-2.9 2.9v16.5c0 1.6 1.3 2.9 2.9 2.9h11c.5 0 .9-.4.9-.9s-.5-.9-.9-.9z"></path><path d="m25.4 19.2-3.5-3.8c-.3-.4-.9-.4-1.3 0l-3.5 3.8c-.2.2-.2.4-.2.6s.1.4.3.6.4.3.6.2c.2 0 .4-.1.6-.3l2-2.1v9c0 .5.4.9.9.9s.9-.4.9-.9v-9l2 2.1c.2.2.4.3.6.3s.5-.1.6-.2c.2-.2.3-.4.3-.6-.1-.3-.2-.5-.3-.6z"></path>
            </g>
          </svg>

          <h3>Other projects</h3>

        </div>

        <div className="ml-6 mb-8 xs:ml-[12%] flex flex-col gap-12 xs:relative xs:trunk xs:after:left-0">
          
          {
            data.githubData.data.user.repositories.edges.map(
              (repo, i) => {
                return <Projects key={i} repo={repo.node} />
              }
            )
          }

        </div>

        <div className="flex gap-4 ml-6 xs:ml-[11%] group transform transition duration-200 ease-in-out hover:scale-105 cursor-pointer xs:mb-6">

          <GitHub 
            className="group-hover:stroke-vivid-orange stroke-light-gray bg-dark-gray self-center relative z-20"
            size="1rem"
          />

          <Link
            className='text-sm group-hover:text-vivid-orange text-light-gray'
           to="https://github.com/5p1n0" 
          >
            Check my GitHub profile!
          </Link>

        </div>

        <svg
          className="hidden xs:block w-[12%] stroke-dark-gray-light svg-end"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          fill="none"
          viewBox="0 0 110 142"
        >
          <path d="m1-8c0 75 108 75 108 150" stroke-width="1" vector-effect="non-scaling-stroke" />
        </svg>

        <div id="about" className="invisible"></div>
      </section>

      <div className="col-start-1 relative trunk"></div>

      <section className="col-start-2 text-left ml-6 mb-[10%]">

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
          Vestibulum ac arcu ligula.<br /> In vel lacinia mi:
        </p>

        <ul className="list-disc list-outside marker:text-lg ml-4 md:ml-3 mb-10 xs:mb-14 md:mb-10 md:max-w-xs lg:max-w-sm">

          <li className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>

          <li className="mb-6">Integer nec ornare libero, quis facilisis risus.</li>

          <li className="mb-6">Donec molestie vitae ligula ut sodales.</li>

        </ul>

        <button className="xs:px-6 xs:py-4">
          <Link
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