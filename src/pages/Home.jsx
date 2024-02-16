import ProfilePic from "../components/ProfilePic";
import { Images } from "../../image_assets/images";


function Home() {
  return (
    <div className="w-full h-3/4 flex flex-wrap xs:px-2 sm:px-2 md:px-10 lg:px-28  py-16 pt-28">
      <div className="w-2/5 flex flex-col justify-center items-start">
        <ProfilePic 
          height="h-96"
          width="w-96"
          radius="rounded-md"
          path ={Images.profile}
          objectFit="object-cover"
        />
      </div>
      <div className="w-3/5 flex flex-col items-start justify-center lg:justify-around py-4 xs:px-7 xs:gap-4 sm:px-10 sm:gap-6 md:gap-10 lg:gap-7">
        <h1 className="lg:text-5xl xs:text-xl sm:text-2xl md:text-3xl md:w-full font-extrabold text-gray-900 self-start ">Hello,<br/> I am Philippe Neri a <br/><span className="bg-clip-text bg-gradient-to-r from-blue-600 via-blue-300 to-blue-500 text-transparent font-extrabold"> Fullstack Web Developer</span> </h1>
        <p className="font-medium xs:text-xs sm:text-sm sm:w-72 md:w-96 md:text-lg lg:w-full lg:text-xl">Currently a student at the University of Ottawa. <br />
          I am seeking to apply my web development skills in building and designing dynamic  and impactful websites</p>
        <div>
        <a href="https://drive.google.com/file/d/1e6eROqu70UthnO8vhocE9eUmI_6u_1wG/view?usp=drive_link" target="_blank" rel="noreferrer"><button className="bg-gradient-to-r from-blue-600 to-blue-300 rounded-2xl w-24 h-9 xs:h-8 sm:w-20 md:w-24 md:h-10 font-bold hover:scale-110 transition ease-in-out duration-200">Resume</button></a>
        </div>
      </div>

    </div>
  )
}

export default Home;