
import { Images } from "../../image_assets/images"
function About() {
  return (
    <div className="flex flex-col items-center gap-4 mt-28">
        <img className="h-44 w-44 rounded-full object-cover " src={Images.circularImage} alt="profile" />
        {/* <ProfilePic
        height="h-40"
        width="w-40"
        path={Images.circularImage}
        radius="rounded-full"
        objectFit="object-cover"
         /> */}
         <small>Accuracy Speed Perseverance</small>
        <p className="text-center font-medium xs:text-sm sm:text-lg lg:text-xl max-w-3xl">I am currently a student at the University of Ottawa, where I am pursuing a degree <br/>
        in Chemical Engineering and Computing Technology. Fueled by my desire to learn and my 
        love for programming, I followed a web development bootcamp offered by Dr. Angela Yu through Udemy. 
        Through this bootcamp and personal research, I leant the following crucial web development 
        technologies: Javascript, python, React, JQuery, Nodejs, REST API, HTML, CSS, bootstrap, SQL, and git.</p>
        <button className="bg-gradient-to-r from-blue-600 to-blue-300 rounded-2xl w-24 h-9 font-bold hover:scale-110 transition ease-in-out duration-200">Resume</button>
    </div>
  )
}

export default About