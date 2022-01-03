import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Artworks from "../../artworks";
import Artwork from "../Artwork";
import ArtworkData from '../../classes/ArtworkData'
import './styles.scss'
import Project from "../Project";
import ProjectData from "../../classes/ProjectData";
import Projects from "../../projects";

export default function ArtworkManager({
    current,
    setShowDetails
}) {  
    const ref = useRef()

    useEffect(() => {        
        const getTotalHeight = () => {
            return [Artworks, Projects][current].reduce((a, b) => (a.vh ?? a) + b.vh) * window.innerHeight
        }
        
        // Main Content Pinning
        let pin = ScrollTrigger.create({
            trigger: ref.current,
            end: "+=" + getTotalHeight(),
            pin: true,
            anticipatePin: true,
        });

        return () => {
            pin.kill()
        }
    }, [current])
        
    
    function buildArtworks() {
        const vh = window.innerHeight
        let cumulated = 0
        let artworks = []

        for (let [i, p] of Object.entries(Artworks)) {
            artworks.push(
                <Artwork 
                    // eslint-disable-next-line eqeqeq
                    first={i==0} 
                    artwork={new ArtworkData(p, cumulated, ref)} 
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
                    project={new ProjectData(p, cumulated, ref)} 
                    setShowDetails={setShowDetails}
                    key={i}
                />)
            cumulated += p.vh * vh
        }

        return projects
    }

    // Empty div needed to fix GSAP/ScrollTrigger/Pin bug : https://greensock.com/forums/topic/28327-scrolltrigger-breaks-react-router/?do=findComment&comment=149711
    return <div>
        <div className="content" id="content" ref={ref}>
        { current === 0 ? buildArtworks() : buildProjects() }
        </div>
    </div>
}