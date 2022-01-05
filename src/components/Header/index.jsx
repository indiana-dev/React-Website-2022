import gsap from "gsap/all";
import { useEffect, useRef } from "react";
import { FaDiscord, FaEnvelope, FaGithub, FaTwitter } from "react-icons/fa";
import './styles.scss'

export default function Header({
    current,
    showDetails
}) {
    const iconSize = 40
    const headerRef = useRef()
    const iconsRef = useRef()
    const nameRef = useRef()

    useEffect(() => {
        let t1, t2

        if (showDetails === false) {
            t1 = gsap.fromTo(iconsRef.current, {
                scale: 1,
                paddingRight: 0,
                paddingTop: 0,
                autoAlpha: 1,
            }, {
                scrollTrigger: {
                    trigger: '.content',
                    start: 'top center',
                    end: "+=500",
                    scrub: 1
                },
                scale: 0.9,
                paddingRight: '2vw',
                paddingTop: '2vh',
                autoAlpha: current ? 0 : 1
            })

            t2 = gsap.fromTo(nameRef.current, {
                autoAlpha: 0
            }, {
                scrollTrigger: {
                    start: window.innerHeight/2,
                    end: "+=500",
                    scrub: 1,
                },
                autoAlpha: 1
            })
        }
        
        return () => {
            if (t1) t1.kill()
            if (t2) t2.kill()
        }
    }, [current, showDetails])

    return <div className="header" ref={headerRef}>
        <div className="header-name" ref={nameRef}>Alexandre<br/>Bizord</div>
        <div className="header-icons" ref={iconsRef}>
            <FaGithub size={iconSize}/>
            <FaEnvelope size={iconSize}/>
            <FaTwitter size={iconSize}/>
            <FaDiscord size={iconSize}/>
        </div>
    </div>
}