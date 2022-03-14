import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Circle, GitHub, Code } from 'react-feather'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Projects from '../components/projects'
import Seo from '../components/seo'

<div className="inner-box box top-[10%] left-[6%] md:top-[8%] md:left-[4%]"></div>


const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query GitHub{
      githubData {
        data {
          user {
            id
            pinnedItems {
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
    <Layout gridLayout='grid-cols-[16px_1fr] md:grid-cols-[minmax(16px,0.2fr)_minmax(375px,1fr)] xl:grid-cols-[minmax(16px,0.5fr)_minmax(375px,1fr)_0.5fr]'>

      <Seo />

      <div className="col-span-full mb-[5%]"></div>

      <div className="col-start-1 relative trunk"></div>

      <section className="col-start-2 text-left ml-6 mb-[25%]">

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
          I'm Luca,<br/> a software developer.
        </h1>

        <div className="relative overflow-hidden 2xl:overflow-visible">

          <p className="md:mb-20 md:max-w-lg">
            Enthusiastic about all things related to web development, always fiddling with code and eager to improve what i'm working with.
          </p>

          <svg className="cover" width="598" height="241" viewBox="0 0 598 241" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(-756 -432)" fill="none" stroke="#464646">
              <g transform="translate(756 432)">
                <rect width="544" height="181" rx="8" stroke="none" />
                <rect x=".5" y=".5" width="543" height="180" rx="7.5" fill="none" />
              </g>
              <g transform="translate(783 461)">
                <rect width="544" height="181" rx="8" stroke="none" />
                <rect x=".5" y=".5" width="543" height="180" rx="7.5" fill="none" />
              </g>
              <g transform="translate(810 492)">
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

        <Link 
          to="/experiences"
        >
          <div className='box w-72 h-36 sm:w-[34rem] sm:h-60 xl:w-full xl:h-72 relative group overflow-hidden'>
            <StaticImage src="../../content/assets/images/hero-1.jpg" alt="RoleEver" layout='fullWidth' placeholder='tracedSVG' className="transition duration-500 ease-in-out group-hover:opacity-20 group-hover:scale-110 box bg-dark-gray-light w-72 h-36 sm:w-[34rem] sm:h-60 xl:w-full xl:h-72" />
            <h4 className='transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 absolute inset-x-0 top-1/4 md:top-1/3 text-center mb-0 px-2 pt-2 max-w-[18rem] xs:max-w-[34rem] md:max-w-full'>Check about my experience with RoleEver</h4>  
          </div>
          
        </Link>

        <div id="projects" className="invisible"></div>

      </section>

      <div className="col-start-1 relative trunk"></div>

      <section className="col-start-2 text-left mb-[22%] xs:mb-[10%]">

        <svg
          className="hidden sm:block w-[12%] stroke-dark-gray-light mb-6"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          fill="none"
          viewBox="0 0 110 142"
        >
          <path d="m1-8c0 75 108 75 108 150" stroke-width="1" vector-effect="non-scaling-stroke" />
        </svg>

        
        <div className="flex gap-4 -ml-2 mb-5 sm:ml-[11.2%] sm:mb-8">

          <Code 
            className='bg-dark-gray self-center relative z-20'
            color="#464646"
            size="1rem"
          />

          <h3>Other projects</h3>

        </div>

        <div className="ml-6 mb-8 sm:ml-[12%] flex flex-col gap-12 sm:relative sm:trunk sm:after:left-0">
          
          {
            data.githubData.data.user.pinnedItems.edges.map(
              (repo, i) => {
                return <Projects key={i} repo={repo.node} />
              }
            )
          }

        </div>

        <div className="flex gap-4 ml-6 sm:ml-[11.2%] group transform transition duration-200 ease-in-out hover:scale-105 cursor-pointer sm:mb-6">

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

        <p className="md:mb-8 md:max-w-xs lg:max-w-sm">
          I'm a software deleveloper from Italy, currently pursuing a bachelor's degree in computer science. I had the oppurtunity to work and grow in the startup environment
          and got the chance of work across the full stack of web development.<br/><br/>
          This taught me the flexibility to work in any domain and face many challenges with open mind.<br/><br/>
          I'm currently focussed on expanding my experience as developer and growing a career in tech.
        </p>

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

          <p className="max-w-screen-sm mb-13">Feel free to reach out if you want a to build something together, have a question, or just want to connect.</p>

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