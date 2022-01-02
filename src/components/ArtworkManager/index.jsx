import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import Artworks from "../../artworks";
import Artwork from "../Artwork";
import ArtworkData from '../../classes/ArtworkData'
import './styles.scss'
import Project from "../Project";
import ProjectData from "../../classes/ProjectData";
import Projects from "../../projects";

export default function ArtworkManager() {  
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const getTotalHeight = () => {
            return Artworks.reduce((a, b) => (a.vh ?? a) + b.vh) * window.innerHeight
        }  

        // Main Content Pinning
        let pin = ScrollTrigger.create({
            trigger: ".content",
            end: "+=" + getTotalHeight(),
            pin: true,
            anticipatePin: true,
        });

        function mouseMove({ screenX: x, screenY: _ }) {
            if (window.scrollY > window.innerHeight/2) return
            if (x > window.innerWidth/2 && current === 0) {
                setCurrent(1)
            } else if (x < window.innerWidth/2 && current === 1) {
                setCurrent(0)
            }
        }

        window.addEventListener('mousemove', mouseMove)

        return () => {
            pin.kill()
            window.removeEventListener('mouseMove', mouseMove)
        }
    }, [current])
        
    
    function buildArtworks() {
        const vh = window.innerHeight
        let cumulated = 0
        let artworks = []

        for (let [i, p] of Object.entries(Artworks)) {
            // console.log(i, p)
            artworks.push(
                <Artwork 
                    // eslint-disable-next-line eqeqeq
                    first={i==0} 
                    artwork={new ArtworkData(p, cumulated)} 
                    key={i}
                />)
            cumulated += p.vh * vh
        }

        return artworks
    }

    function buildProjects() {
        const vh = window.innerHeight
        let cumulated = 0
        let projects = []

        for (let [i, p] of Object.entries(Projects)) {
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
         {current === 0 ? buildArtworks() : buildProjects()}
    </div>
}