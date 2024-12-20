import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { ArrowLeft } from 'react-feather'
import MyImage from '../components/utils'

const ExperiencesPage = () => {

  const data = useStaticQuery(graphql`
    {
      large: allFile(filter: {name: {eq: "hero-1-mod"}}) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      
      small: allFile(filter: {name: {eq: "hero-1"}}) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      } 
    }
  `)

  return (
    <Layout isIndex={false} gridLayout='grid-cols-[16px_1fr_16px] md:grid-cols-[minmax(16px,0.1fr)_minmax(375px,1fr)_minmax(16px,0.1fr)]'>

      <Seo
        title="Work Experience"
        description="Showcase of my work experience"
      />

      <section className='relative z-10 col-start-2 sm:mb-8'>

        <div className='flex flex-col h-72 justify-center items-start sm:items-center'>

          <svg viewBox="0 0 567.44 123.17" className='w-52 h-12 xl:w-72 xl:h-20 mb-8 fill-light-gray'>
            <g transform="translate(-52.559 194.67) scale(.1 -.1)">
              <path d="m830 1941c0-5 13-37 29-72 41-87 72-169 65-169-3 0-18 9-34 20-48 34-154 80-185 80-29 0-29 0 30-60 32-33 56-62 53-65-2-3-24 1-47 10-55 19-141 30-141 18 0-5 23-20 51-33l50-24-60-12c-34-7-66-16-72-20-16-10 10-24 45-24h30l-36-32c-59-55-82-111-82-203-1-61 4-91 20-126 25-54 74-112 128-151 59-42 69-36 35 25-55 100-48 178 21 241 37 33 98 55 118 42 7-4 5-25-4-59-19-70-18-94 5-107 28-15 31-13 31 20 0 41 62 104 118 121 39 11 47 11 79-6 19-11 44-36 56-57s25-38 29-38 16 30 28 67l20 67-33 70c-38 81-164 291-210 351-64 84-137 151-137 126zm244-434c36-46 33-68-3-33-29 28-47 66-31 66 5 0 20-15 34-33zm3291 304c-6-21-13-21-286-21-235 0-279-2-279-14 0-8 9-17 20-21 31-10 35-57 35-405 0-350-4-395-35-403-11-3-20-10-20-16 0-8 81-11 270-11 263 0 270 0 270-20 0-25 27-27 33-2 24 86 38 175 28 185-8 8-14 2-21-20-13-37-28-40-241-49l-147-7-6 39c-4 21-7 95-8 164l-1 125h134 134l3-27c5-45 32-35 32 11 0 21 3 66 6 100 6 52 4 61-9 61-9 0-19-9-22-20-6-19-15-20-141-20-120 0-134 2-135 18-3 33 2 157 8 196l5 39 170-6c174-6 198-12 198-48 0-11 7-19 15-19 12 0 15 17 17 90 0 50 1 95 2 102 2 21-22 20-29-1zm-1510-20c-53-5-70-10-70-21 0-8 10-16 21-18 29-4 34-60 34-402 0-332-5-396-31-403-11-3-19-10-19-16 0-7 37-11 110-11s110 4 110 11c0 6-9 13-20 16-13 3-22 17-27 42-9 50-10 584 0 709l8 102-23-2c-13-1-54-4-93-7zm-1535-16c0-9 9-19 19-22 27-7 30-34 37-344l7-276 46-13c25-8 51-15 56-17 7-2 10 97 10 283 1 337-8 314 120 314 138 0 205-53 205-163 0-111-50-150-210-166-51-6-95-12-97-15-6-5 8-23 95-122 28-32 86-108 127-169l76-110-27-5c-15-3-29-11-32-17-3-10 29-13 137-13 119 0 141 2 141 15 0 8-8 15-18 15-12 0-75 65-165 169l-147 170 53 11c147 30 220 140 196 292-12 75-51 127-124 163l-60 30-222 3c-204 4-223 2-223-13zm943-281c-54-19-119-83-145-141-42-96-41-238 2-323 25-50 89-104 141-119 52-16 151-17 206-2 57 16 135 88 164 153 33 74 34 230 3 299-30 64-87 116-147 134-63 19-169 18-224-1zm174-83c60-28 85-81 91-194 6-111-9-167-55-207-29-26-42-30-92-30-71 0-117 27-146 85-28 56-29 242-2 297 33 65 120 86 204 49zm874 86c-117-45-191-184-178-337 10-118 55-193 144-236 48-24 66-27 141-26 48 1 109 8 135 16 42 12 49 12 54 0 3-8 12-14 20-14 13 0 15 10 9 61-3 34-6 80-6 101 0 47-20 48-32 1-11-44-91-83-168-83-98 0-156 58-167 165l-6 55h195 195l5 38c8 59-8 150-34 187-38 56-90 79-188 82-51 2-98-2-119-10zm186-99c17-17 27-40 30-72l6-46h-137c-130 0-136 1-136 20 0 37 38 96 72 114 49 25 132 17 165-16zm1832 98c-73-26-140-100-165-183-19-62-18-188 2-245 20-60 73-121 130-148 52-26 163-30 259-10 41 9 60 9 68 1 22-22 27-10 27 67 0 116-17 158-36 90-7-25-22-40-59-61-43-24-59-27-117-25-61 3-71 7-103 38-35 34-65 106-65 157v23h200 200v61c0 172-74 250-239 249-36-1-82-7-102-14zm156-81c34-17 50-42 60-99l7-36h-142-142l6 32c19 96 121 145 211 103zm570 84c-11-6-32-25-47-43l-27-31-1 38c0 37 0 37-42 37-78 0-148-12-148-25 0-7 11-16 24-19 33-8 38-47 38-256 0-198-6-246-33-253-10-3-19-10-19-16 0-7 43-11 131-11 100 0 130 3 127 13-3 6-20 13-40 15-35 3-35 4-42 55-9 75-7 330 2 345 21 32 77 62 116 62 50 0 63-8 67-39 2-14 9-26 15-28 14-5 24 43 24 113v54h-62c-35 0-72-5-83-11zm-1575-23c0-8 10-16 23-20 19-4 44-52 144-278 109-245 123-273 144-273 25 0 30 10 201 410 58 136 63 145 89 145 11 0 19 7 19 15 0 12-19 15-115 15s-115-3-115-15c0-8 8-15 18-15 37 0 41-12 27-80-12-55-97-295-109-307-8-9-109 274-121 340-7 36-6 37 24 43 17 4 31 13 31 20 0 11-26 14-130 14s-130-3-130-14zm-3486-281c-56-128-5-280 123-364 26-17 64-36 85-42 37-10 108-3 108 10-1 3-19 15-42 26s-44 26-46 33c-4 11 0 12 18 2 12-6 68-16 123-21 118-11 172-33 218-87l31-37-6 68c-10 119-65 207-154 245-27 12-87 26-134 32-160 20-247 61-287 137l-19 38-18-40z" />
            </g>
          </svg>

          <p className="text-left sm:text-center text-white max-w-3xl">
            An app that brought innovation on how role-turn based games are played on mobile platforms, with dedicated tools and services, for players and game masters.
          </p>

        </div>

      </section>

      <MyImage data={data} />

      <section className='col-start-2 mb-20 md:mb-28'>
        <div className="flex flex-col sm:flex-row gap-12 xl:gap-0 justify-evenly items-start sm:items-center">
          
          <StaticImage src="../images/features-1.jpg" alt="Friendlist" layout='constrained' quality='80' width={412} height={436} formats={["auto", "avif", "webp"]} placeholder='tracedSVG' className="box order-last sm:order-first" />

          <div>

            <h3 className="mb-5 md:mb-8 text-vivid-orange text-left">Foundation</h3>
            <p className='mb-0 xs:mb-10 max-w-md text-left'>
              I was responsible for building features for end-users and my work spanned between back-end and front-end related tasks.<br/><br/>
              A major server-side feature that I've developed using <span className='tech before:bg-[#25c2a0]'>Socket.IO</span> and <span className='tech before:bg-[#d81b60]'>RxJS</span> libs, mainly concerning socket rooms, was the real time status of users in the app.
            </p>

          </div>

        </div>
      </section>

      <section className='col-start-2 mb-20 md:mb-32'>
        <div className="flex flex-col sm:flex-row-reverse gap-12 xl:gap-0 justify-evenly items-start sm:items-center">

          <StaticImage src="../images/features-2.jpg" alt="Chats" layout='constrained' formats={["auto", "avif", "webp"]} quality='80' width={412} height={436} placeholder='tracedSVG' className="box order-last sm:order-first" />

          <div>

            <h3 className="mb-5 md:mb-8 text-vivid-orange text-left">Maturity</h3>
            <p className='mb-0 xs:mb-10 max-w-md text-left'>
              Once we made the core services, my work moved to the in-app shop and the users' shared content, ultimately improving the UX.<br /><br /> This was the fundamental part of the application.
            </p>

          </div>

        </div>
      </section>

      <section className='col-start-2 mb-20'>
        <div className='flex flex-col min-h-[200px] items-center justify-between'>
          
          <h3 className="text-center text-vivid-orange">Tech Stack</h3>
        
          <p className="text-center max-w-3xl">
            I've worked with <span className='tech before:bg-[#c3002f]'>Angular</span> as main framework, together with <span className='tech before:bg-[#25c2a0]'>Socket.IO</span> and <span className='tech before:bg-[#d81b60]'>RxJS</span> libs, <span className='tech before:bg-[#09934e]'>MongoDB</span> as database and <span className='tech before:bg-[#3880ff]'>Ionic</span> framework, mainly for frontend related tasks.
          </p>

        </div>
      </section>

      <section className='col-start-2 mb-20'>
        <div className='flex flex-wrap gap-6 md:gap-12 justify-center'>
          
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
              <path fill="#CB6699" fillRule='evenodd' clipRule='evenodd' d="M1.219 56.156c0 .703.207 1.167.323 1.618.756 2.933 2.381 5.45 4.309 7.746 2.746 3.272 6.109 5.906 9.554 8.383 2.988 2.148 6.037 4.248 9.037 6.38.515.366 1.002.787 1.561 1.236-.481.26-.881.489-1.297.7-3.959 2.008-7.768 4.259-11.279 6.986-2.116 1.644-4.162 3.391-5.607 5.674-2.325 3.672-3.148 7.584-1.415 11.761.506 1.22 1.278 2.274 2.367 3.053.353.252.749.502 1.162.6 1.058.249 2.136.412 3.207.609l3.033-.002c3.354-.299 6.407-1.448 9.166-3.352 4.312-2.976 7.217-6.966 8.466-12.087.908-3.722.945-7.448-.125-11.153a11.696 11.696 0 00-.354-1.014c-.13-.333-.283-.657-.463-1.072l6.876-3.954.103.088c-.125.409-.258.817-.371 1.23-.817 2.984-1.36 6.02-1.165 9.117.208 3.3 1.129 6.389 3.061 9.146 1.562 2.23 5.284 2.313 6.944.075.589-.795 1.16-1.626 1.589-2.513 1.121-2.315 2.159-4.671 3.23-7.011l.187-.428c-.077 1.108-.167 2.081-.208 3.055-.064 1.521.025 3.033.545 4.48.445 1.238 1.202 2.163 2.62 2.326.97.111 1.743-.333 2.456-.896a10.384 10.384 0 002.691-3.199c1.901-3.491 3.853-6.961 5.576-10.54 1.864-3.871 3.494-7.855 5.225-11.792l.286-.698c.409 1.607.694 3.181 1.219 4.671.61 1.729 1.365 3.417 2.187 5.058.389.775.344 1.278-.195 1.928-2.256 2.72-4.473 5.473-6.692 8.223-.491.607-.98 1.225-1.389 1.888a3.701 3.701 0 00-.48 1.364 1.737 1.737 0 001.383 1.971 9.661 9.661 0 002.708.193c3.097-.228 5.909-1.315 8.395-3.157 3.221-2.386 4.255-5.642 3.475-9.501-.211-1.047-.584-2.065-.947-3.074-.163-.455-.174-.774.123-1.198 2.575-3.677 4.775-7.578 6.821-11.569.081-.157.164-.314.306-.482.663 3.45 1.661 6.775 3.449 9.792-.912.879-1.815 1.676-2.632 2.554-1.799 1.934-3.359 4.034-4.173 6.595-.35 1.104-.619 2.226-.463 3.405.242 1.831 1.742 3.021 3.543 2.604 3.854-.892 7.181-2.708 9.612-5.925 1.636-2.166 1.785-4.582 1.1-7.113-.188-.688-.411-1.365-.651-2.154.951-.295 1.878-.649 2.837-.868 4.979-1.136 9.904-.938 14.702.86 2.801 1.05 5.064 2.807 6.406 5.571 1.639 3.379.733 6.585-2.452 8.721-.297.199-.637.356-.883.605a.869.869 0 00-.205.67c.021.123.346.277.533.275 1.047-.008 1.896-.557 2.711-1.121 2.042-1.413 3.532-3.314 3.853-5.817l.063-.188-.077-1.63c-.031-.094.023-.187.016-.258-.434-3.645-2.381-6.472-5.213-8.688-3.28-2.565-7.153-3.621-11.249-3.788a25.401 25.401 0 00-9.765 1.503c-.897.325-1.786.71-2.688 1.073-.121-.219-.251-.429-.358-.646-.926-1.896-2.048-3.708-2.296-5.882-.176-1.544-.392-3.086-.025-4.613.353-1.469.813-2.913 1.246-4.362.223-.746.066-1.164-.646-1.5a2.854 2.854 0 00-.786-.258c-1.75-.254-3.476-.109-5.171.384-.6.175-1.036.511-1.169 1.175-.076.381-.231.746-.339 1.122-.443 1.563-.757 3.156-1.473 4.645-1.794 3.735-3.842 7.329-5.938 10.897-.227.385-.466.763-.752 1.23-.736-1.54-1.521-2.922-1.759-4.542-.269-1.832-.481-3.661-.025-5.479.339-1.356.782-2.687 1.19-4.025.193-.636.104-.97-.472-1.305-.291-.169-.62-.319-.948-.368a11.643 11.643 0 00-5.354.438c-.543.176-.828.527-.994 1.087-.488 1.652-.904 3.344-1.589 4.915-2.774 6.36-5.628 12.687-8.479 19.013-.595 1.321-1.292 2.596-1.963 3.882-.17.326-.418.613-.63.919-.17-.201-.236-.339-.235-.477.005-.813-.092-1.65.063-2.436a172.189 172.189 0 011.578-7.099c.47-1.946 1.017-3.874 1.538-5.807.175-.647.178-1.252-.287-1.796-.781-.911-2.413-1.111-3.381-.409l-.428.242.083-.69c.204-1.479.245-2.953-.161-4.41-.506-1.816-1.802-2.861-3.686-2.803-.878.027-1.8.177-2.613.497-3.419 1.34-6.048 3.713-8.286 6.568a2.592 2.592 0 01-.757.654c-2.893 1.604-5.795 3.188-8.696 4.778l-3.229 1.769c-.866-.826-1.653-1.683-2.546-2.41-2.727-2.224-5.498-4.393-8.244-6.592-2.434-1.949-4.792-3.979-6.596-6.56-1.342-1.92-2.207-4.021-2.29-6.395-.105-3.025.753-5.789 2.293-8.362 1.97-3.292 4.657-5.934 7.611-8.327 3.125-2.53 6.505-4.678 10.008-6.639 4.901-2.743 9.942-5.171 15.347-6.774 5.542-1.644 11.165-2.585 16.965-1.929 2.28.258 4.494.78 6.527 1.895 1.557.853 2.834 1.97 3.428 3.716.586 1.718.568 3.459.162 5.204-.825 3.534-2.76 6.447-5.195 9.05-3.994 4.267-8.866 7.172-14.351 9.091a39.478 39.478 0 01-9.765 2.083c-2.729.229-5.401-.013-7.985-.962-1.711-.629-3.201-1.591-4.399-2.987-.214-.25-.488-.521-.887-.287-.391.23-.46.602-.329.979.219.626.421 1.278.762 1.838.857 1.405 2.107 2.424 3.483 3.298 2.643 1.681 5.597 2.246 8.66 2.377 4.648.201 9.183-.493 13.654-1.74 6.383-1.78 11.933-4.924 16.384-9.884 3.706-4.13 6.353-8.791 6.92-14.419.277-2.747-.018-5.438-1.304-7.944-1.395-2.715-3.613-4.734-6.265-6.125C68.756 18.179 64.588 17 60.286 17h-4.31c-5.21 0-10.247 1.493-15.143 3.274-3.706 1.349-7.34 2.941-10.868 4.703-7.683 3.839-14.838 8.468-20.715 14.833-2.928 3.171-5.407 6.67-6.833 10.79a40.494 40.494 0 00-1.111 3.746m27.839 36.013c-.333 4.459-2.354 8.074-5.657 11.002-1.858 1.646-3.989 2.818-6.471 3.23-.9.149-1.821.185-2.694-.188-1.245-.532-1.524-1.637-1.548-2.814-.037-1.876.62-3.572 1.521-5.186 1.176-2.104 2.9-3.708 4.741-5.206 2.9-2.361 6.046-4.359 9.268-6.245l.243-.1c.498 1.84.735 3.657.597 5.507zM54.303 70.98c-.235 1.424-.529 2.849-.945 4.229-1.438 4.777-3.285 9.406-5.282 13.973-.369.845-.906 1.616-1.373 2.417a1.689 1.689 0 01-.283.334c-.578.571-1.126.541-1.418-.206-.34-.868-.549-1.797-.729-2.716-.121-.617-.092-1.265-.13-1.897.039-4.494 1.41-8.578 3.736-12.38.959-1.568 2.003-3.062 3.598-4.054a6.27 6.27 0 011.595-.706c.85-.239 1.372.154 1.231 1.006zm17.164 21.868l6.169-7.203c.257 2.675-4.29 8.015-6.169 7.203zm19.703-4.847c-.436.25-.911.43-1.358.661-.409.212-.544-.002-.556-.354a2.385 2.385 0 01.093-.721c.833-2.938 2.366-5.446 4.647-7.486l.16-.082c1.085 3.035-.169 6.368-2.986 7.982z"></path>
            </svg>
            <span className='text-light-gray text-sm'>Sass/Scss</span>
          </div>

          <div className='flex flex-col items-center'>
            <svg
              className='mb-2 md:mb-3 w-11 h-11 md:w-16 md:h-16'
              viewBox="0 0 128 128"
            >
              <path fill="#007acc" d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1A23 23 0 0180 109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H57.16v46.23H45.65V69.26H29.38v-5a49.19 49.19 0 01.14-5.16c.06-.08 10-.12 22-.1h21.81z"></path>
            </svg>
            <span className='text-light-gray text-sm'>TypeScript</span>
          </div>

          <div className='flex flex-col items-center'>
            <svg
              className='mb-2 md:mb-3 w-11 h-11 md:w-16 md:h-16'
              viewBox="0 0 128 128"
            >
              <g fill="#FFFFFF" fillRule='evenodd'>
                <path d="M63.951.001C28.696.001.001 28.696.001 63.951s28.695 63.95 63.95 63.95 63.95-28.695 63.95-63.95S99.206.001 63.95.001zm0 10.679c29.484 0 53.272 23.787 53.272 53.271 0 29.485-23.788 53.272-53.272 53.272-29.484 0-53.272-23.787-53.272-53.272 0-29.484 23.788-53.271 53.272-53.271z" color="#000" overflow="visible"></path>
                <path d="M48.39 60.716c14.004-11.44 27.702-23.278 42.011-34.384-7.505 11.533-15.224 22.913-22.729 34.445-6.437.03-12.875.03-19.282-.061zM60.228 67.092c6.468 0 12.905 0 19.342.092-14.095 11.38-27.732 23.309-42.071 34.384 7.505-11.533 15.224-22.943 22.729-34.476z"></path>
              </g>
            </svg>
            <span className='text-light-gray text-sm'>Socket.IO</span>
          </div>

          <div className='flex flex-col items-center'>
            <svg
              className='mb-2 md:mb-3 w-11 h-11 md:w-16 md:h-16'
              viewBox="0 0 506.25 497.33"
            >
              <g transform="translate(-2.6475 503.88) scale(.1 -.1)" fill="#d81b60">
                <path d="m1745 5034c-173-38-205-59-343-224-30-36-91-100-135-142-71-67-92-81-171-112-57-22-125-39-181-46-94-12-206-39-246-61-58-30-137-118-160-178-17-43-30-143-38-292-9-184-27-227-133-321-288-257-318-323-259-568 6-25 15-54 20-65 12-25 36-105 50-167 6-26 11-89 11-141 0-93 0-94-41-152-70-100-94-155-92-209 0-27 5-58 11-70 5-12 17-39 26-60 27-61 78-134 165-235 78-89 157-228 175-306 9-34 101-222 122-246 8-8 14-21 14-27 0-13 141-229 193-297 54-69 203-238 254-287 135-130 372-307 535-401 84-48 271-139 338-164 36-13 74-28 85-32 117-53 386-121 580-147 192-27 512-24 705 5 80 12 149 26 154 32 6 5 21 9 35 9 110 1 480 156 681 286 267 172 551 455 722 719 56 86 162 292 178 345 5 14 11 34 16 44 6 15-4 11-40-15-27-19-56-38-65-44-9-5-30-20-48-32-17-13-34-23-37-23-4 0-28-15-54-33-119-82-343-197-447-230-61-19-184-41-191-35-2 3 24 19 58 36 256 126 510 367 667 631 42 71 65 119 132 276 28 65 61 186 79 290 19 102 21 147 18 298-3 98-9 182-14 187-7 7-34-37-77-125-106-211-227-384-376-537-30-32-61-58-68-58s8 30 33 67c97 142 200 384 218 513 2 14 10 45 17 70 18 62 18 374 0 460-14 68-34 133-57 187-8 17-14 35-14 39 0 33-160 283-182 284-3 0 7-30 23-67 16-38 29-79 29-93 0-15 5-31 11-37 17-17 26-482 11-520-6-15-14-50-18-78-3-27-11-59-17-70s-9-22-8-25c6-11-12-97-23-115-7-11-23-51-36-90-12-38-31-86-41-105s-31-64-48-100c-32-71-130-240-177-306-125-176-368-422-509-517l-40-27h137c248 0 456 66 636 203 53 40 62 44 56 25-3-13-11-25-17-27-5-2-49-40-96-84-287-267-705-495-1001-548-30-5-77-14-105-20-27-6-88-14-135-17l-85-7 58-50c81-70 157-119 262-169 111-53 199-76 335-87 58-4 110-9 115-9 25-4-122-29-232-40-145-15-381-9-505 14-366 67-821 345-1181 720l-87 91 6-50c3-27 9-61 14-75s11-44 13-67c11-95 137-297 267-429 38-39 70-74 70-78 0-10-177 82-233 121-335 234-532 526-614 913-23 107-25 415-4 530 48 264 113 411 261 585 60 71 113 118 254 226 89 68 415 209 482 209 14 0 46-11 72-24 91-46 429-175 602-229 270-85 439-121 708-148 267-28 507 27 623 142 126 124 117 347-24 574-131 211-322 407-556 569-133 92-156 107-196 127-22 11-67 35-100 54-190 105-451 215-509 215-9 0-42 9-73 19-32 11-103 27-158 35s-118 18-140 22c-22 3-94 8-159 11l-119 4-49 43c-73 64-183 123-268 144-70 18-253 27-305 16z" />
              </g>
            </svg>
            <span className='text-light-gray text-sm'>RxJS</span>
          </div>

          <div className='flex flex-col items-center'>
            <svg
              className='mb-2 md:mb-3 w-11 h-11 md:w-16 md:h-16'
              viewBox="0 0 128 128"
            >
              <path fill="#F0DB4F" d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"></path>
            </svg>
            <span className='text-light-gray text-sm'>JavaScript</span>
          </div>

          <div className='flex flex-col items-center'>
            <svg
              className='mb-2 md:mb-3 w-11 h-11 md:w-16 md:h-16'
              viewBox="0 0 128 128"
            >
              <path fill="#4FAA41" fillRule='evenodd' clipRule='evenodd' d="M90.491 57.282c-.37-4.79-1.496-9.409-3.062-13.934-3.244-10.104-8.45-19.046-15.783-26.74-1.854-1.946-3.916-3.729-5.209-6.151-.818-1.532-1.597-3.085-2.394-4.629l-.505-1.273c-.085.292-.139.396-.142.501-.065 2.517-1.491 4.224-3.267 5.817-1.997 1.793-3.856 3.739-5.775 5.618l-5.901 7.763c-1.592 2.925-3.182 5.85-4.772 8.775l-3.19 8.617-.096.134c-1.756 5.768-2.622 11.698-3.048 17.688-.16 2.251.022 4.535.149 6.798.181 3.235.743 6.415 1.586 9.545 3.062 11.372 9.276 20.805 17.771 28.819 1.579 1.489 3.199 2.843 4.847 4.26.282-.965.507-1.93.763-2.895.256-.961.515-1.917.688-2.881-.174.964-.369 1.92-.562 2.881l-.826 2.895.738 2.501.684 3.884.326 4.053c-.003.823-.036 1.648.014 2.47.012.21.288.404.442.606l1.376.483 1.434.558-.246-3.603-.011-3.548.495-5.405.359-1.177 1.027-1.82c1.268-1.02 2.629-1.946 3.784-3.081 2.09-2.054 4.175-4.134 6.045-6.383a47.846 47.846 0 006.191-9.516c1.122-2.284 2.178-4.614 3.052-7.001.77-2.104 1.247-4.315 1.854-6.479.054-.156.126-.309.16-.468 1.254-5.841 1.465-11.741 1.004-17.682zm-23.599 49.375l-.805-1.763.805 1.763 1.183 1.01-1.183-1.01z"></path>
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
      </section>

      <StaticImage src="../images/hero-2.jpg" alt="screens" layout='fullWidth' formats={["auto", "avif", "webp"]} placeholder='tracedSVG' className="col-span-full mb-12 md:mb-32" />

      <section className='col-start-2 justify-self-center mb-12 md:mb-20'>
        <p className='text-center font-heading italic font-semibold text-lg md:text-2xl lg:text-3xl lg:leading-relaxed max-w-4xl'>"At the end of my journey with RoleEver, I learned how to be a team player, to work with Scrum methodology, to contribute for a large-scale project and lastly improved my developer full stack skills."</p>
      </section>

      <div className='col-start-2 justify-self-center'>
        <Link
          to="/#experience"
        >
          <button className="flex gap-3 items-center xs:px-6 xs:py-4 mb-12">
              <ArrowLeft className='inline-block relative animate-bounce-left' size={24} /> Back
          </button>
        </Link>
      </div>

    </Layout>
  )
}

export default ExperiencesPage

