import gsap from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { SplitText } from '../../libraries/Split3.min'

import './styles.scss'

export const scrollTrigger = {
    trigger: '#name',
    start: 0,
    end: 800,//"+800",
    scrub: 2,
    // markers: true,
}

export default function TopPage() {   
    useEffect(() => {
        let name = new SplitText("#name")
        let lastname = new SplitText("#lastname")

        let wordA = name.chars
        let wordB = lastname.chars.reverse()

        /// Last Name Animation Start
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
            end: "+=10000",
            pin: true,
            anticipatePin: true,
          });
    })
            
    return <div className="top">
        <div className="name" id="name">Alexandre</div>
        <div className="name" id="lastname">Bizord</div>
        <div className="title" id="title">Digital Artist & Developer</div>
    </div>
}