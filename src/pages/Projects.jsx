import Project from "../components/Project";
import { projects } from "../../image_assets/projects_array";

function Projects() {
  return (
    <div className="mt-20 xs:px-2 sm:px-10 px-28 flex flex-col justify-center items-center box-border">
        {projects.map((proj, index)=>{
            return(
                <Project
                key={index}
                title= {proj.title}
                desc = {proj.desc}
                path={proj.path}
                link={proj.link}
                 />
            )
        })}
    </div>
  )
}

export default Projects