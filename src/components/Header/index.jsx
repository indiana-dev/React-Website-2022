import gsap from "gsap/all";
import { useEffect, useRef } from "react";
import { FaDiscord, FaGithub, FaMailBulk, FaTwitter } from "react-icons/fa";
import './styles.scss'

export default function Header() {
    const iconSize = 40
    const headerRef = useRef()
    const iconsRef = useRef()
    const nameRef = useRef()

    useEffect(() => {
        gsap.to(iconsRef.current, {
            scrollTrigger: {
                trigger: '.content',
                start: 0,
                end: "+=500",
                scrub: 1
            },
            scale: 0.7,
            paddingRight: '2vw',
            paddingTop: '2vh',
        })

        gsap.fromTo(nameRef.current, {
            autoAlpha: 0
        }, {
            scrollTrigger: {
                start: window.innerHeight/2,
                end: "+=500",
                scrub: 1,
            },
            autoAlpha: 1
        })
    })

    return <div className="header" ref={headerRef}>
        <div className="header-name" ref={nameRef}>Alexandre<br/>Bizord</div>
        <div className="header-icons" ref={iconsRef}>
        <FaGithub size={iconSize}/>
        <FaMailBulk size={iconSize}/>
        <FaTwitter size={iconSize}/>
        <FaDiscord size={iconSize}/>
        </div>
    </div>
}