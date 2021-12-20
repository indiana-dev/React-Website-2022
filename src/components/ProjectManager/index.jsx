import Projects from "../../projects";
import Project from "../Project";
import './styles.scss'

export default function ProjectManager() {
    function buildProjects() {
        return Projects.map((p, i) => <Project 
            first={i===0} 
            offset={i===0&&false ? 0 : i*2000 - (i-1)*300} 
            project={p}
            key={i}
        />)
    }

    return <div className="content" id="content">
        {buildProjects()}
    </div>
}