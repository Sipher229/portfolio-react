import { NavLink } from "react-router-dom"

function Header() {
  return (
    <div className='w-full rounded-sm h-16 shadow-md bg-white fixed flex justify-between xs:px-2 md:px-10  sm:gap-10 items-center px-10 lg:px-28 text-gray-900'>
      <h1 className="text-3xl font-extrabold font-sans">SPN</h1>
      <div className="w-fit h-1/2 flex justify-between xs:gap-3 sm:gap-6 md:gap-8 lg:gap-12">
        <NavLink to="/" className={({isActive} )=>`xs:text-sm sm:text-lg border-2 border-transparent rounded-sm ${isActive? "border-b-blue-500": "border-b-transparent"}`}>Home</NavLink>
        <NavLink to="/projects" className={({isActive} )=>`xs:text-sm sm:text-lg border-2 border-transparent rounded-sm ${isActive? "border-b-blue-500": "border-b-transparent"}`}>Projects</NavLink>
        <NavLink to="/about" className={({isActive} )=>`xs:text-sm sm:text-lg border-2 border-transparent rounded-sm ${isActive? "border-b-blue-500": "border-b-transparent"}`}>About</NavLink>
        <NavLink to="/contact" className={({isActive} )=>`xs:text-sm sm:text-lg border-2 border-transparent rounded-sm ${isActive? "border-b-blue-500": "border-b-transparent"}`}>Contact</NavLink>

      </div>
      <div>
      <a href="https://github.com/Sipher229" target="_blank" rel="noreferrer"><button className="bg-gradient-to-r from-blue-600 to-blue-300 rounded-2xl xs:w-20 xs:h-8 xs:text-sm sm:text-lg sm:w-24 sm:h-8 md:w-20 md:h-9 font-bold hover:scale-110 transition ease-in-out duration-200">Github</button></a>
      </div>
    </div>
  )
}

export default Header