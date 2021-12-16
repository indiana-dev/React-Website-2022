import gsap from 'gsap/all'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect } from 'react'
import ImageSlider from '../ImageSlider'
import { scrollTrigger } from '../TopPage'
import './styles.scss'

export default function Content() {
    useEffect(() => {
        gsap.fromTo('.project-name', {
            y: 500,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: '.project-container',
                start: 'top center',
                end: "top top",
                scrub: 1,
                // markers: true,
            },
            y: 0,
            opacity: 1,
        })

        gsap.fromTo('.project-desc', {
            y: 500,
            opacity: 0,
        }, {
            scrollTrigger: {
                trigger: '.project-container',
                start: 'top center',
                end: 3000,
                scrub: 1,
                // markers: true,
            },
            y: 0,
            opacity: 1,
            ease: "power1"
        })

        ScrollTrigger.create({
            trigger: "#title",
            start: "top top", 
            end: 2000,//"bottom 150px",
            pin: ".content",
          });

        gsap.to('#title', {
            scrollTrigger: scrollTrigger,
            left: 0,
        })
    })

    return <div className="content">
        <ImageSlider direction="up" horizontal_align="left" />
        <ImageSlider direction="down" horizontal_align="right" />
        <div className="title" id="title">Digital Artist & Developer</div>
        <div className='project-container'>
            <div className='project-pictures'></div>
            <div className='project-infos'>
                <div className='project-name'>{"< Concentricated >"}</div>
                <div className='project-desc'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</div>
            </div>
        </div>
    </div>
}