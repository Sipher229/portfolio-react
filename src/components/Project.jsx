/* eslint-disable react/prop-types */

function Project({

    title,
    desc,
    path,
    link = "#",

}) {
  return (
    <div className="w-5/6 min-h-72 xs:flex-col xs:w-5/6 xs:h-96 sm:w-4/6 sm:h-96 md:flex-row md:h-36 md:w-5/6 max-h-96 flex sm:flex-col my-5 rounded-md border border-solid border-blue-400 shadow-md overflow-hidden">
        <div className="w-1/2 xs:w-full xs:h-1/2 sm:w-full h-72 sm:h-1/2 md:h-full">
            <img className="h-72 w-72 xs:h-full xs:w-full sm:h-48 sm:w-full md:w-96 md:h-full object-fit" src={path} alt="project sreenshot"/>
        </div>
        <div className="w-1/2 xs:w-full xs:h-1/2 sm:w-full h-72 flex flex-col md:gap-6 lg:gap-3 xs:gap-2 justify-center items-center px-5 sm:h-1/2 md:h-full">
        
            <h1 className="md:text-3xl sm:text-xl font-bold text-center">{title}</h1>
            <p className="text-center xs:text-xs sm:text-sm md:text-sm lg:text-lg">{desc}</p>
            <a href={link} className="underline underline-offset-1 font-bold hover:italic" target="_blank" rel="noreferrer">More on Github</a>
        </div>
    </div>
  )
}

export default Project