import Projects from "../../projects";
import Project from "../Project";

export default function ProjectManager() {
    function buildProjects() {
        return Projects.map((p, i) => <Project 
            first={i===0} 
            offset={i===0 ? 0 : i*2000 - (i-1)*300} 
            project={p}
            key={i}
        />)
    }

    return <div className="content">
        {buildProjects()}
        {/* <Project first={true} />
        <Project offset={2000} />
        <Project offset={3700} />
        <Project offset={3700+1700} />
        <Project offset={3700+1700+1700} /> */}
    </div>
}