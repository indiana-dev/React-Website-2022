import gsap from "gsap/all";
import { useEffect } from "react";
import { SplitText } from '../../libraries/Split3.min'

import './styles.scss'

export const scrollTrigger = {
    trigger: '#name',
    start: 0,
    end: "+800",
    scrub: 1,
    // markers: true,
}

export default function TopPage() {   
    useEffect(() => {
        let name = new SplitText("#name")
        let lastname = new SplitText("#lastname")

        let wordA = name.chars
        let wordB = lastname.chars.reverse()

        gsap.fromTo(wordB, {
            opacity: 0,
            x: -500,
        }, {
            opacity: 1,
            x: 0,
            stagger: 0.02, 
        })

        gsap.fromTo(wordA, {
            opacity: 0,
            x: 500,
        }, {
            opacity: 1,
            x: 0,
            stagger: 0.02, 
            ease:"circ",
            onComplete: () => {
                gsap.to(wordA, {
                    scrollTrigger: scrollTrigger,
                    stagger: 0.02, 
                    x: -window.innerWidth,
                    opacity: 0
                })
        
                gsap.to(wordB, {
                    scrollTrigger: scrollTrigger,
                    stagger: 0.02, 
                    x: window.innerWidth,
                    opacity: 0
                })
            }
        })       
    })
            
    return <div className="top">
        <div className="name" id="name">Alexandre</div>
        <div className="name" id="lastname">Bizord</div>
    </div>
}