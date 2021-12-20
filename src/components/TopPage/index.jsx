import gsap, { ScrollToPlugin } from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { SplitText } from '../../libraries/Split3.min'
import { FaChevronDown } from 'react-icons/fa';

import './styles.scss'

export const scrollTrigger = {
    trigger: '#name',
    start: 0,
    end: 800,//"+800",
    scrub: 2,
    // markers: true,
}

export default function TopPage() {   
    const showProjectRef = useRef()
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
            left: 0
        })
        
        // Main Content Pinning
        ScrollTrigger.create({
            trigger: ".content",
            start: "top top", 
            end: "+=7000",
            pin: true,
            anticipatePin: true,
          });

        // Show Projects Scrub Animation
        gsap.to(showProjectRef.current, {
            scrollTrigger: {
                start: 0,
                end: "+=500",
                scrub: 1,
            },
            autoAlpha: 0,
            letterSpacing: '0.3vw',
        })
    })
            
    return <div className="top">
        <div className="name" id="name">Alexandre</div>
        <div className="name" id="lastname">Bizord</div>
        <div className="title" id="title">Digital Artist & Developer</div>
        <div className="show-projects" ref={showProjectRef}>
            <p onClick={() => {
                gsap.to(window, {duration: 0.75, scrollTo:{y: "#content", offsetY: -300}, ease:'power2'});
            }}>Scroll to see my projects</p>
            <FaChevronDown style={{transform: 'scaleX(1.5)'}}/>
        </div> 
    </div>
}