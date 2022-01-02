import gsap, { ScrollToPlugin } from "gsap/all";
import { useEffect, useState } from "react";
import { SplitText } from '../../libraries/Split3.min'
import ContentSelector from "../ContentSelector";
import './styles.scss'

export const scrollTrigger = {
    trigger: '#name',
    start: 0,
    end: 800,//"+800",
    scrub: 2,
    // markers: true,
}

export default function TopPage() {   
    const [contentIndex, setContentIndex] = useState(0)
    // const [contentProgress, setContentProgress] = useState(1)

    gsap.registerPlugin(ScrollToPlugin);

    useEffect(() => {
        let name = new SplitText("#name")
        let lastname = new SplitText("#lastname")

        let wordA = name.chars
        let wordB = lastname.chars.reverse()

        // Last Name Animation Start
        gsap.fromTo(wordB, {
            opacity: 0,
            x: -500,
        }, {
            opacity: 1,
            x: 0,
            stagger: 0.02, 
        })

        // First Name Animation Start
        gsap.fromTo(wordA, {
            opacity: 0,
            x: 500,
        }, {
            opacity: 1,
            x: 0,
            stagger: 0.02, 
            ease:"circ",
            onComplete: () => {
                // First Name Scrub Animation
                gsap.to(wordA, {
                    scrollTrigger: scrollTrigger,
                    stagger: 0.02, 
                    x: -window.innerWidth,
                    opacity: 0
                })
                
                //Last Name Scrub Animation
                gsap.to(wordB, {
                    scrollTrigger: scrollTrigger,
                    stagger: 0.02, 
                    x: window.innerWidth,
                    opacity: 0
                })
            }
        })

        // Title Scrub Animation
        gsap.to('#title', {
            scrollTrigger: {
                trigger: '#title',
                start: 0,
                end: "top top",
                scrub: 2,
            },
            x: '-50vw'
        })

        // Show Artworks Scrub Animation
        // gsap.to(showArtworkRef.current, {
        //     scrollTrigger: {
        //         start: 0,
        //         end: "+=500",
        //         scrub: 1,
        //     },
        //     autoAlpha: 0,
        //     letterSpacing: '0.3vw',
        // })
    }, [])

    function onMouseMove({ screenX: x, screenY: _ }) {
        if (window.scrollY > 1) return
        // if (window.scrollY > window.innerHeight/2) return

        // const obj = {progress: 1}
        // const animDuration = 0.1
        if (x > window.innerWidth/2 && contentIndex === 0) {
            // gsap.to(obj, {progress: 0, duration: animDuration, ease: 'none', onUpdate: (e) => setContentProgress(obj.progress)})
            setContentIndex(1)
        } else if (x < window.innerWidth/2 && contentIndex === 1) {
            // let obj = {progress: 1}
            // gsap.to(obj, {progress: 0, duration: animDuration, ease: 'none', onUpdate: (e) => setContentProgress(obj.progress)})
            setContentIndex(0)
        }
    }
    
    return <div className="top" onMouseMove={onMouseMove}>
        <div className="name" id="name">Alexandre</div>
        <div className="name" id="lastname">Bizord</div>
        <div className="title" id="title">Digital Artist & Developer</div>
        <ContentSelector index={contentIndex} />
        {/* <div className="show-artworks" ref={showArtworkRef}>
            <p onClick={() => {
                gsap.to(window, {duration: 0.75, scrollTo:{y: "#content", offsetY: -300}, ease:'power2'});
            }}>Scroll to see my artworks</p>
            <FaChevronDown style={{transform: 'scaleX(1.5)'}}/>
        </div>  */}
    </div>
}