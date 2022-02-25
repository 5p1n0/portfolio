import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const ExperiencesPage = () => {
  return (
    <Layout>

      <StaticImage src="../../content/assets/images/hero-1.jpg" alt="RoleEver" layout='fullWidth' placeholder='tracedSVG' className="box md:mx-6 mb-12 xs:mb-20 col-span-full" />

      <h1 className="col-start-2 mb-6 xs:mb-10 text-light-gray">RoleEver</h1>

      <p className="col-start-2 mr-6 md:mr-0 mb-16 md:mb-32 max-w-none">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas. Sed vulputate mi sit amet mauris commodo. Massa placerat duis ultricies lacus sed. Condimentum lacinia quis vel eros donec. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus.
      </p>

      <div className="flex gap-20 flex-col xs:flex-row md:ml-56 col-start-2 md:col-span-full mb-28 items-start md:items-center">
        
        <StaticImage src="../../content/assets/images/features-1.jpg" alt="Chats interface" layout='constrained' width='412' className="box order-last xs:order-first max-w-[90%] md:max-w-[40%]" />

        <div>

          <h3 className="mb-5 xs:mb-10 text-vivid-orange">Tortor at auctor</h3>
          <p className='mb-0 xs:mb-10 mr-6 md:mr-0 max-w-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices gravida dictum fusce ut placerat orci. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Ac tortor dignissim convallis aenean et. Ullamcorper malesuada proin libero nunc consequat interdum varius. Facilisi morbi tempus iaculis urna id.
          </p>

        </div>

      </div>

      <div className="flex gap-20 flex-col xs:flex-row-reverse col-start-2 md:col-span-full mb-16 md:mb-40 md:mr-56 items-start md:items-center">

        <StaticImage src="../../content/assets/images/features-2.jpg" alt="Chats interface" layout='constrained' width='412' className="box order-last xs:order-first max-w-[90%] md:max-w-[40%]" />

        <div>

          <h3 className="mb-5 xs:mb-10 text-vivid-orange">Dignissim cras tincidunt</h3>
          <p className='mb-0 xs:mb-10 mr-6 md:mr-0 max-w-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris in aliquam sem fringilla ut. Ut tortor pretium viverra suspendisse potenti nullam. Sed viverra ipsum nunc aliquet bibendum enim facilisis. Eget nunc scelerisque viverra mauris in aliquam sem. Nunc sed id semper risus in hendrerit gravida.
          </p>

        </div>

      </div>

      <h3 className="col-start-2 mb-5 md:mb-10 mr-6 md:mr-0 text-center text-vivid-orange">Diam vulputate ut</h3>

      <p className="col-start-2 max-w-none mb-20 mr-6 md:mr-0 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu tincidunt tortor aliquam nulla facilisi cras fermentum. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. At auctor urna nunc id cursus. Elit eget gravida cum sociis natoque penatibus et magnis. Velit dignissim sodales ut eu sem.
      </p>

      <StaticImage src="../../content/assets/images/hero-2.jpg" alt="RoleEver" layout='fullWidth' placeholder='tracedSVG' className="box md:mx-6 col-span-full mb-12 md:mb-32" />

      
      <p className='text-center col-start-2 font-heading italic font-semibold md:text-2xl lg:text-3xl lg:leading-relaxed mb-12 md:mb-28 mr-6 md:mr-0 max-w-none'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est pellentesque elit ullamcorper dignissim cras."</p>

    </Layout>
  )
}

export default ExperiencesPage

