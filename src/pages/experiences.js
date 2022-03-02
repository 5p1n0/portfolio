import * as React from 'react'
import LayoutExp from '../components/layout_exp'
import { StaticImage } from 'gatsby-plugin-image'

const ExperiencesPage = () => {
  return (
    <LayoutExp>

      <StaticImage src="../../content/assets/images/hero-1.jpg" alt="RoleEver" layout='fullWidth' placeholder='tracedSVG' className="mb-12 xs:mb-20 col-span-full" />

      <h1 className="col-start-2 mb-6 md:mb-8 text-light-gray text-left">RoleEver</h1>

      <p className="col-start-2 mb-16 md:mb-32 text-left max-w-none">
        RoleEver was a startup that developed a social network service to innovate how role/turn based games are played on mobile platforms.<br/><br/>
        My experiece with RoleEver, started as trainee and later as team member.
      </p>

      <div className="flex gap-12 md:gap-20 flex-col sm:flex-row md:ml-20 xl:ml-56 col-start-2 md:col-span-full mb-16 md:mb-28 items-start">
        
        <StaticImage src="../../content/assets/images/features-1.jpg" alt="Chats interface" layout='constrained' width='412' placeholder='tracedSVG' className="box order-last xs:order-first max-w-[80%] md:max-w-[40%] self-center" />

        <div className='md:mr-6'>

          <h3 className="mb-5 md:mb-8 text-vivid-orange text-left">Early works</h3>
          <p className='mb-0 xs:mb-10 max-w-xl text-left'>
            As trainee my job was to develop community related features and my work was spanning between back end/front end tasks.<br/><br/>
            A core server-side feature that i've developed using Socket.IO and RxJS libs, mainly concerning socket rooms, was the real time status of users within the app.
          </p>

        </div>

      </div>

      <div className="flex gap-12 md:gap-20 flex-col sm:flex-row-reverse col-start-2 md:col-span-full mb-16 md:mr-20 xl:mr-56 md:mb-40 items-start">

        <StaticImage src="../../content/assets/images/features-2.jpg" alt="Chats interface" layout='constrained' width='412' placeholder='tracedSVG' className="box order-last xs:order-first max-w-[80%] md:max-w-[40%] self-center" />

        <div className='md:ml-6'>

          <h3 className="mb-5 md:mb-8 text-vivid-orange text-left">Late works</h3>
          <p className='mb-0 xs:mb-10 max-w-xl text-left'>
            After my trainee experiece ended, the team offered me to become a member and develop an ambitious feature related to the in-app shop and user's shared content.<br/><br/>
            This time my work was to refactor collections of user data within the database and expanding core app services and components, to enable the selection of purchased dice skins within the users shared stories.
          </p>

        </div>

      </div>

      <h3 className="col-start-2 mb-5 md:mb-8 text-center text-vivid-orange">Tech Stack</h3>

      <p className="col-start-2 max-w-none mb-20 text-center">
        The tech stack i've worked with was <span className='tech before:bg-[#c3002f]'>Angular</span> as main framework, together with <span className='tech before:bg-[#25c2a0]'>Socket.IO</span> and <span className='tech before:bg-[#d81b60]'>RxJS</span> libs, <span className='tech before:bg-[#09934e]'>MongoDB</span> as database and <span className='tech before:bg-[#3880ff]'>Ionic</span> framework, mainly for front end related tasks.
      </p>

      <div className='flex flex-wrap gap-6 md:gap-12 col-span-full mb-20 justify-self-center justify-center'>
        
        <div className='flex flex-col items-center'>
          <svg
            className='mb-2 md:mb-3 w-11 h-11 md:w-16 md:h-16' 
            viewBox="0 0 128 128"
          >
            <path fill="#c3002f" d="M52.864 64h23.28L63.769 38.123zM63.81 1.026L4.553 21.88l9.363 77.637 49.957 27.457 50.214-27.828 9.36-77.635L63.81 1.026zM48.044 75l-7.265 18.176-13.581.056 36.608-81.079-.07-.153h-.064l.001-.133.063.133h.141l.123-.274V12h-.124l-.069.153 38.189 81.417-13.074-.287-8.042-18.58-17.173.082"></path>
          </svg> 
          <span className='text-light-gray text-sm'>Angular</span>
        </div>

        <div className='flex flex-col items-center'>
          <svg
            className='mb-2 md:mb-3 w-11 h-11 md:w-16 md:h-16'
            viewBox="0 0 128 128"
          >
            <path fill="#E44D26" d="M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387L118.968 2H9.032zm89.126 26.539l-.627 7.172L97.255 39H44.59l1.257 14h50.156l-.336 3.471-3.233 36.119-.238 2.27L64 102.609v.002l-.034.018-28.177-7.423L33.876 74h13.815l.979 10.919L63.957 89H64v-.546l15.355-3.875L80.959 67H33.261l-3.383-38.117L29.549 25h68.939l-.33 3.539z"></path>
          </svg>
          <span className='text-light-gray text-sm'>HTML 5</span>
        </div>

        <div className='flex flex-col items-center'>
          <svg
            className='mb-2 md:mb-3 w-11 h-11 md:w-16 md:h-16'
            viewBox="0 0 128 128"
          >
            <path fill="#1572B6" d="M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626L119.24 1H8.76zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336L64 101.607v.001l-.022.019-28.311-7.888L33.75 72h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229L81.075 65H48.792l-.277-3.043-.631-7.129L47.553 51h34.749l1.264-14H30.64l-.277-3.041-.63-7.131L29.401 23h69.281l-.331 3.862z"></path>
          </svg>
          <span className='text-light-gray text-sm'>CSS 3</span>
        </div>

        <div className='flex flex-col items-center'>
          <svg
            className='mb-2 md:mb-3 w-11 h-11 md:w-16 md:h-16'
            viewBox="0 0 128 128"
          >
            <path fill="#007acc" d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1A23 23 0 0180 109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H57.16v46.23H45.65V69.26H29.38v-5a49.19 49.19 0 01.14-5.16c.06-.08 10-.12 22-.1h21.81z"></path>
          </svg>
          <span className='text-light-gray text-sm'>Typescript</span>
        </div>

        <div className='flex flex-col items-center'>
          <svg
            className='mb-2 md:mb-3 w-11 h-11 md:w-16 md:h-16'
            viewBox="0 0 128 128"
          >
            <g fill="#FFFFFF" fill-rule="evenodd">
              <path d="M63.951.001C28.696.001.001 28.696.001 63.951s28.695 63.95 63.95 63.95 63.95-28.695 63.95-63.95S99.206.001 63.95.001zm0 10.679c29.484 0 53.272 23.787 53.272 53.271 0 29.485-23.788 53.272-53.272 53.272-29.484 0-53.272-23.787-53.272-53.272 0-29.484 23.788-53.271 53.272-53.271z" color="#000" font-weight="400" font-family="sans-serif" overflow="visible" fill-rule="nonzero"></path>
              <path d="M48.39 60.716c14.004-11.44 27.702-23.278 42.011-34.384-7.505 11.533-15.224 22.913-22.729 34.445-6.437.03-12.875.03-19.282-.061zM60.228 67.092c6.468 0 12.905 0 19.342.092-14.095 11.38-27.732 23.309-42.071 34.384 7.505-11.533 15.224-22.943 22.729-34.476z"></path>
            </g>
          </svg>
          <span className='text-light-gray text-sm'>Socket.IO</span>
        </div>

        <div className='flex flex-col items-center'>
          <svg
            className='mb-2 md:mb-3 w-11 h-11 md:w-16 md:h-16'
            viewBox="0 0 128 128"
          >
            <path fill="#F0DB4F" d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"></path>
          </svg>
          <span className='text-light-gray text-sm'>Javascript</span>
        </div>

        <div className='flex flex-col items-center'>
          <svg
            className='mb-2 md:mb-3 w-11 h-11 md:w-16 md:h-16'
            viewBox="0 0 128 128"
          >
            <path fill-rule="evenodd" clip-rule="evenodd" fill="#4FAA41" d="M90.491 57.282c-.37-4.79-1.496-9.409-3.062-13.934-3.244-10.104-8.45-19.046-15.783-26.74-1.854-1.946-3.916-3.729-5.209-6.151-.818-1.532-1.597-3.085-2.394-4.629l-.505-1.273c-.085.292-.139.396-.142.501-.065 2.517-1.491 4.224-3.267 5.817-1.997 1.793-3.856 3.739-5.775 5.618l-5.901 7.763c-1.592 2.925-3.182 5.85-4.772 8.775l-3.19 8.617-.096.134c-1.756 5.768-2.622 11.698-3.048 17.688-.16 2.251.022 4.535.149 6.798.181 3.235.743 6.415 1.586 9.545 3.062 11.372 9.276 20.805 17.771 28.819 1.579 1.489 3.199 2.843 4.847 4.26.282-.965.507-1.93.763-2.895.256-.961.515-1.917.688-2.881-.174.964-.369 1.92-.562 2.881l-.826 2.895.738 2.501.684 3.884.326 4.053c-.003.823-.036 1.648.014 2.47.012.21.288.404.442.606l1.376.483 1.434.558-.246-3.603-.011-3.548.495-5.405.359-1.177 1.027-1.82c1.268-1.02 2.629-1.946 3.784-3.081 2.09-2.054 4.175-4.134 6.045-6.383a47.846 47.846 0 006.191-9.516c1.122-2.284 2.178-4.614 3.052-7.001.77-2.104 1.247-4.315 1.854-6.479.054-.156.126-.309.16-.468 1.254-5.841 1.465-11.741 1.004-17.682zm-23.599 49.375l-.805-1.763.805 1.763 1.183 1.01-1.183-1.01z"></path>
          </svg>
          <span className='text-light-gray text-sm'>MongoDB</span>
        </div>

        <div className='flex flex-col items-center'>
          <svg
            className='mb-2 md:mb-3 w-11 h-11 md:w-16 md:h-16'
            viewBox="0 0 128 128"
          >
            <g fill="#4e8ef7"><circle cx="64" cy="64" r="24.08"></circle><path d="M113.14 23.14a8.27 8.27 0 00-13.7-6.25 59 59 0 1011.67 11.67 8.24 8.24 0 002.03-5.42zM64 121A57 57 0 1198.1 18.36a8.27 8.27 0 0011.53 11.53A57 57 0 0164 121z"></path></g>
          </svg>
          <span className='text-light-gray text-sm'>Ionic</span>
        </div>

      </div>

      <StaticImage src="../../content/assets/images/hero-2.jpg" alt="screens" layout='fullWidth' placeholder='tracedSVG' className="col-span-full mb-12 md:mb-32" />

      
      <p className='text-center col-start-2 font-heading italic font-semibold md:text-2xl lg:text-3xl lg:leading-relaxed mb-12 md:mb-28 max-w-none'>"At the end of my journey with RoleEver, i learned how to communicate and collaborate with a team and work using Scrum methodology, how to understand and contribute to improve an existing project and at last, improve my developer full stack skills."</p>

    </LayoutExp>
  )
}

export default ExperiencesPage

