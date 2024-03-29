import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Circle, GitHub, Code, Linkedin } from 'react-feather'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Projects from '../components/projects'
import Seo from '../components/seo'

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    {
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
    <Layout isIndex={true} gridLayout='grid-cols-[16px_1fr] md:grid-cols-[minmax(16px,0.2fr)_minmax(375px,1fr)] xl:grid-cols-[minmax(16px,0.5fr)_minmax(375px,1fr)_0.5fr]'>

      <Seo
        title="Homepage"
      />

      <div className="col-span-full mb-[5%]"></div>

      <div className="col-start-1 relative trunk"></div>

      <section className="col-start-2 text-left ml-6 mb-[25%]">

        <div className="circle">

          <Circle
            className="bg-dark-gray self-center relative z-20"
            color="#464646"
            size={16}
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
            I am passionate about technology and web development, with a full stack background of more than 2 years of work experience for startups.
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

        <Link
          to="#contact"
        >
          <button className="xs:px-6 xs:py-4">
            Contact Me
          </button>
        </Link>

        <div id="experience" className="invisible"></div>
      </section>

      <div className="col-start-1 relative trunk"></div>

      <section className="col-start-2 text-left ml-6 mb-[22%] xs:mb-[12%]">

        <div className="circle mb-5 xs:mb-10">

          <Circle
            className="bg-dark-gray self-center relative z-20"
            color="#464646"
            size={16}
          />

          <h2>
            My work experience
          </h2>

        </div>

        <p className="xs:mb-10 md:mb-14 md:max-w-lg">
          Learn more about my previous work history
        </p>

        <Link 
          to="/experience"
        >
          <div className='box w-72 h-36 sm:w-[34rem] sm:h-60 xl:w-full xl:h-72 relative group overflow-hidden'>
            <StaticImage src="../images/logo.jpg" alt="RoleEver logo" formats={["auto", "avif", "webp"]} layout='fullWidth' placeholder='tracedSVG' className="transition duration-500 ease-in-out group-hover:scale-110 box bg-dark-gray-light w-72 h-36 sm:w-[34rem] sm:h-60 xl:w-full xl:h-72" />
          </div>
          
        </Link>

        <div id="projects" className="invisible"></div>

      </section>

      <div className="col-start-1 relative trunk"></div>

      <section className="col-start-2 text-left mb-[22%] xs:mb-[10%]">

        <svg
          className="hidden sm:block w-[12%] stroke-1 stroke-dark-gray-light mb-6"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          fill="none"
          viewBox="0 0 110 142"
        >
          <path d="m1-8c0 75 108 75 108 150" />
        </svg>

        
        <div className="flex gap-4 sm:gap-10 -ml-2 mb-6 sm:ml-[11.2%] sm:mb-10">

          <Code 
            className='bg-dark-gray self-center relative z-20'
            color="#464646"
            size={16}
          />

          <h3>Other projects</h3>

        </div>

        <div className="ml-6 mb-10 sm:ml-[12%] flex flex-col gap-12 sm:relative sm:trunk sm:after:left-0">
          
          {
            data.githubData.data.user.pinnedItems.edges.map(
              (repo, i) => {
                return <Projects key={i} repo={repo.node} />
              }
            )
          }

        </div>

        <div className="flex gap-4 ml-6 sm:ml-[11.2%] group transform transition duration-200 ease-in-out hover:scale-105 cursor-pointer sm:mb-10">

          <a
            className='group-hover:text-vivid-orange text-light-gray flex gap-3'
            href="https://github.com/5p1n0" 
            target="_blank"
            rel='noreferrer'
          >
            <title>GitHub</title>
            <GitHub 
              className="self-center relative z-20"
              size={16}
            />
            <span className='text-sm'>Check my GitHub profile!</span>
          </a>

        </div>

        <svg
          className="hidden sm:block w-[12%] stroke-1 stroke-dark-gray-light svg-end"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          fill="none"
          viewBox="0 0 110 142"
        >
          <path d="m1-8c0 75 108 75 108 150" />
        </svg>

        <div id="about" className="invisible"></div>
      </section>

      <div className="block lg:hidden col-start-1 relative trunk"></div>

      <section className="col-start-2 lg:col-span-full text-left ml-6 before:lg:absolute before:lg:z-10 before:lg:h-px before:lg:w-11/12 before:lg:bg-dark-gray-light">
        
        <div className="lg:hidden circle mb-5 xs:mb-10 md:mb-14">
          <Circle
            className="bg-dark-gray self-center relative z-20"
            color="#464646"
            size={16}
          />

          <h2>
            About me
          </h2>
        </div>
        
        <p className="lg:hidden md:mb-8 md:max-w-xs lg:max-w-sm">
          Hi, I'm Luca Spinosi, a software developer from Italy currently pursuing a bachelor's in computer science. I had the opportunity to work with a startup, where I've obtained a deeper knowledge in many domains.<br /><br />
          From this experience I've learned to be flexible and solved many challenges with creativity and dedication.<br /><br />
          I'm currently focused on expanding my skills as developer and progress a career in tech.
        </p>

        <div className='hidden lg:flex justify-center gap-16 my-[5%] items-center'>
          <StaticImage src='../images/photo.jpg' alt="Me" layout='constrained' width={296} aspectRatio={1} placeholder='tracedSVG' formats={ ["auto", "avif", "webp"] }  style={{ clipPath: 'circle(50%)'}}  className="hidden sm:block" />
          
          <div>
            <h2 className='mb-5 md:mb-8'>
              About me
            </h2>

            <p className="md:mb-8 md:max-w-xs lg:max-w-sm">
              Hi, I'm Luca Spinosi, a software developer from Italy currently pursuing a bachelor's in computer science. I had the opportunity to work with a startup, where I gained in-depth knowledge in many fields.<br /><br />
              Through this experience I have learned to be flexible and solved numerous challenges with creativity and dedication.<br /><br />
              I am currently focusing on expanding my developer skills and advancing a career in tech.   
            </p>
          </div>
        </div>

        <div id="contact" className="invisible"></div>

      </section>

      <section className="col-span-full mx-4 before:absolute before:z-10 before:h-px before:w-11/12 before:bg-dark-gray-light">
        <div className="grid justify-items-center text-center">

          <div className="mb-[15%] md:mb-[5%]"></div>

          <h3 className="mb-8 md:mb-14">Get in touch</h3>

          <p className="max-w-screen-sm mb-13">Please feel free to contact me if you are interested in working or hiring me for any project.</p>

          <a
            href="mailto:luca.s@mailfence.com"
            className='mb-16 md:mb-22'
          >
            <button className="xs:px-6 xs:py-4">
              Let's Talk
            </button>
          </a>

          <div className='flex gap-12 mb-8 md:mb-10'>

            <a
              href="https://github.com/5p1n0"
              target="_blank"
              rel='noreferrer'
              aria-label='GitHub'
            >
              <GitHub className='text-light-gray hover:text-vivid-orange transform transition-colors duration-200 ease-in-out' size={24}/>
            </a>

            <a
              href="https://linkedin.com/in/lucaspinosi"
              target="_blank"
              rel='noreferrer'
              aria-label='linkedIn'
            >
              <Linkedin className='text-light-gray hover:text-vivid-orange transform transition-colors duration-200 ease-in-out' size={24}/>
            </a>

          </div>

          <p className="mb-6">Bologna - Italy</p>

          <a
            href="mailto:luca.s@mailfence.com"
          >
            <p className="mb-20 underline text-vivid-orange">luca.s@mailfence.com</p>
          </a>

        </div>
      </section>


    </Layout>
  )
}

export default IndexPage