import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import Artwork from "../Artwork";
import './styles.scss'
import Project from "../Project";

export default function ArtworkManager({
    current,
    setShowDetails,
    projects,
    artworkManagerHeight
}) {  
    const ref = useRef()

    useLayoutEffect(() => {                
        // Main Content Pinning
        let pin = ScrollTrigger.create({
            trigger: ref.current,
            end: "+=" + artworkManagerHeight,
            pin: true,
            anticipatePin: true,
        });

        return () => {
            pin.kill()
        }
    }, [artworkManagerHeight])
    
    function buildArtworks() {
        return projects.map((p, i) => 
            <Artwork 
                first={i==='0'} 
                artwork={p} 
                key={i}
            />)
    }

    function buildProjects() {
        return projects.map((p, i) => 
            <Project 
                first={i==='0'} 
                project={p} 
                setShowDetails={setShowDetails}
                key={i}
            />
        )
    }

    // Empty div needed to fix GSAP/ScrollTrigger/Pin bug : https://greensock.com/forums/topic/28327-scrolltrigger-breaks-react-router/?do=findComment&comment=149711
    return <div>
        <div className="content" id="content" ref={ref}>
        { current === 0 ? buildArtworks() : buildProjects() }
        </div>
    </div>
}