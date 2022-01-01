import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Projects from "../../projects";
import Project from "../Project";
import ProjectData from '../../classes/ProjectData'
import './styles.scss'
import { useState } from "react/cjs/react.development";

export default function ProjectManager() {  
    const [current, setCurrent] = useState(0)
    const mainContentPinning = useRef(null)

    function mouseMove({ screenX: x, screenY: _ }) {
        if (window.scrollY > window.innerHeight/2) return
        if (x > window.innerWidth/2 && current === 0) {
            setCurrent(1)
        } else if (x < window.innerWidth/2 && current === 1) {
            setCurrent(0)
        }
    }

    useEffect(() => {
        const getTotalHeight = () => {
            return Projects.reduce((a, b) => (a.vh ?? a) + b.vh) * window.innerHeight
        }  

        if (mainContentPinning.current) mainContentPinning.current.kill()

        // Main Content Pinning
        mainContentPinning.current = ScrollTrigger.create({
            trigger: ".content",
            end: "+=" + getTotalHeight(),
            pin: true,
            anticipatePin: true,
        });

        window.addEventListener('mousemove', mouseMove)
    }, [current])
        
    
    function buildProjects() {
        const vh = window.innerHeight
        let cumulated = 0
        let projects = []

        for (let [i, p] of Object.entries(Projects)) {
            // console.log(i, p)
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

    function buildOther() {
        return <div style={{height: '800vh'}}></div>
    }

    console.log('current', current)
    return <div className="content" id="content">
         {current === 0 ? buildProjects() : buildOther()}
    </div>
}