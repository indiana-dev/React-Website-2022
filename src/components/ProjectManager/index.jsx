import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Projects from "../../projects";
import Project from "../Project";
import ProjectData from '../../classes/ProjectData'
import './styles.scss'

export default function ProjectManager() {  
    useEffect(() => {
        const getTotalHeight = () => {
            return Projects.reduce((a, b) => (a.vh ?? a) + b.vh) * window.innerHeight
        }

        // Main Content Pinning
        ScrollTrigger.create({
            trigger: ".content",
            end: "+=" + getTotalHeight(),
            pin: true,
            anticipatePin: true,
        });
    })
    
    function buildProjects() {
        const vh = window.innerHeight
        let cumulated = 0
        let projects = []

        for (let [i, p] of Object.entries(Projects)) {
            console.log(i, p)
            projects.push(
                <Project 
                    // eslint-disable-next-line eqeqeq
                    first={i==0} 
                    project={new ProjectData(p, cumulated)} 
                    key={i}
                />)
            cumulated += p.vh * vh
        }

        return projects
    }

    return <div className="content" id="content">
        {buildProjects()}
    </div>
}