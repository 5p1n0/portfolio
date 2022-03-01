import * as React from 'react'

const Projects = ({repo}) => {

  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div 
      className="grid grid-cols-1 grid-rows-[1.6fr_0.4fr] box p-3 md:p-4 sm:ml-6 bg-dark-gray-dark cursor-pointer transform transition duration-200 ease-in-out hover:scale-105 hover:bg-vivid-orange group w-72 h-36 md:w-96 md:h-40"
      onClick={() => openRepoinNewTab(repo.url)}  
    >

      <div className="row-start-1">
        <svg
          className="stroke-light-gray fill-light-gray group-hover:stroke-dark-gray group-hover:fill-dark-gray min-w-[16px] self-end stroke-0 shrink-0 mb-1.5 md:mb-2"
          width="12" 
          height="16" 
          aria-hidden="true" 
          role="img" 
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 12 16" 
        >
          <path d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z" fillRule="evenodd" />
        </svg>

        <p className="mb-1 font-heading group-hover:text-dark-gray">{repo.name}</p>

        <p className="mb-1 text-sm group-hover:text-dark-gray">{repo.description}</p>
      </div>
      
      <div className="row-start-2 self-end">
        <div className="flex justify-between">

          <div
            className="w-[10px] h-[10px] rounded-full self-center"
            style={{ backgroundColor: repo.primaryLanguage.color }}
          />

          <p className="ml-2 mb-0 mr-auto text-sm group-hover:text-dark-gray">{repo.primaryLanguage.name}</p>

          <svg
            className="stroke-light-gray fill-light-gray group-hover:stroke-dark-gray group-hover:fill-dark-gray stroke-0 ml-4 min-w-[16px]"
            width="12" 
            height="20" 
            aria-hidden="true" 
            role="img" 
            viewBox="0 0 10 16" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m8 1a1.993 1.993 0 0 0-1 3.72v1.28l-2 2-2-2v-1.28a1.993 1.993 0 0 0-1-3.72 1.993 1.993 0 0 0-1 3.72v1.78l3 3v1.78a1.993 1.993 0 0 0 1 3.72 1.993 1.993 0 0 0 1-3.72v-1.78l3-3v-1.78a1.993 1.993 0 0 0-1-3.72zm-6 3.2c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2zm3 10c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2zm3-10c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z" fillRule="evenodd" />
          </svg>

          <p className="ml-1 mb-0 text-sm group-hover:text-dark-gray">{repo.forkCount} </p>

          <svg
            className="stroke-light-gray fill-light-gray group-hover:stroke-dark-gray group-hover:fill-dark-gray stroke-0 ml-4 min-w-[16px]"
            width="14" 
            height="20" 
            aria-hidden="true" 
            role="img" 
            viewBox="0 0 14 16" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z" fillRule="evenodd" />
          </svg>

          <p className="ml-1 mb-0 text-sm group-hover:text-dark-gray">{repo.stargazers.totalCount}</p>     
        
        </div>
      </div>

    </div>
  )
}

export default Projects