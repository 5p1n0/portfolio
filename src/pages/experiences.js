import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const ExperiencesPage = () => {
  return (
    <Layout>

      <StaticImage src="../../content/assets/images/hero-1.jpg" alt="RoleEver" layout='fullWidth' placeholder='tracedSVG' className="mb-12 xs:mb-20 col-span-full" />

      <h1 className="col-start-2 mb-6 xs:mb-10 text-light-gray">RoleEver</h1>

      <p className="col-start-2 mr-6 md:mr-0 mb-16 md:mb-32 max-w-none">
        RoleEver was a startup that developed a social network service to innovate how role/turn based games are played on mobile platforms.<br/>
        My experiece with RoleEver, started as trainee and later as team member.
      </p>

      <div className="flex gap-12 md:gap-20 flex-col sm:flex-row md:ml-20 xl:ml-56 col-start-2 md:col-span-full mb-16 md:mb-28 items-start sm:items-center">
        
        <StaticImage src="../../content/assets/images/features-1.jpg" alt="Chats interface" layout='constrained' width='412' placeholder='tracedSVG' className="box order-last xs:order-first max-w-[90%] md:max-w-[40%]" />

        <div>

          <h3 className="mb-5 xs:mb-10 text-vivid-orange">Early works</h3>
          <p className='mb-0 xs:mb-10 mr-6 md:mr-0 max-w-xl'>
            As trainee my job was to develop community related features and my work was spanning between back end/front end tasks.<br/><br/>
            A core server-side feature that i've developed using Socket.IO and RxJS libs, mainly concerning socket rooms, was the real time status of users within the app.
          </p>

        </div>

      </div>

      <div className="flex gap-12 md:gap-20 flex-col sm:flex-row-reverse col-start-2 md:col-span-full mb-16 mr-4 md:mr-20 xl:mr-56 md:mb-40 items-start sm:items-center">

        <StaticImage src="../../content/assets/images/features-2.jpg" alt="Chats interface" layout='constrained' width='412' placeholder='tracedSVG' className="box order-last xs:order-first max-w-[90%] md:max-w-[40%]" />

        <div>

          <h3 className="mb-5 xs:mb-10 text-vivid-orange">Late works</h3>
          <p className='mb-0 xs:mb-10 md:mr-6 lg:mr-0 max-w-xl'>
            After my trainee experiece ended, the team offered me to become a member and develop an ambitious feature related to the in-app shop and user's shared content.<br/><br/>
            This time my work was to refactor collections of user data within the database and expanding core app services and components, to enable the selection of purchased dice skins within the users shared stories.
          </p>

        </div>

      </div>

      <h3 className="col-start-2 mb-5 md:mb-10 mr-6 md:mr-0 text-center text-vivid-orange">Tech Stack</h3>

      <p className="col-start-2 max-w-none mb-20 mr-6 md:mr-0 text-center">
        The tech stack i've worked with was Angular as main framework, together with Socket.io and RxJS libs, MongoDB as database and Ionic framework, mainly for front end related tasks.
      </p>

      <StaticImage src="../../content/assets/images/hero-2.jpg" alt="RoleEver" layout='fullWidth' placeholder='tracedSVG' className="col-span-full mb-12 md:mb-32" />

      
      <p className='text-center col-start-2 font-heading italic font-semibold md:text-2xl lg:text-3xl lg:leading-relaxed mb-12 md:mb-28 mr-6 md:mr-0 max-w-none'>"At the end of my journey with RoleEver, i learned how to communicate and collaborate with a team and work using Scrum methodology, how to understand and contribute to improve an existing project and at last, improve my developer full stack skills."</p>

    </Layout>
  )
}

export default ExperiencesPage

