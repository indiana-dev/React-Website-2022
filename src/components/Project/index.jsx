import gsap from 'gsap/all'
import { useEffect, useRef } from 'react'
import ImageSlider from '../ImageSlider'
import './styles.scss'
import { SplitText } from '../../libraries/Split3.min'

export default function Project({
    first=false,
    offset=0,
    project,
}) {
    const containerRef = useRef()
    const nameRef = useRef()
    const descRef = useRef()

    useEffect(() => {
        let nameChars = new SplitText(nameRef.current).chars
        
        // Project Name Scrub Animation
        if (first)
            gsap.fromTo(nameRef.current, {
                y: 500,
                autoAlpha: 0,
            }, {
                scrollTrigger: {
                    trigger: '.content',
                    start: 'top bottom',
                    end: "top top",
                    scrub: 1,
                    onLeave: () => {
                        gsap.fromTo(nameChars, {
                            autoAlpha: 1,
                        }, {
                            scrollTrigger: {
                                trigger: '.content',
                                start: window.innerHeight/2 + offset + 2000 - 300,
                                end: "+=100",
                                scrub: 1,
                            },
                            stagger: 0.02,
                            autoAlpha: 0,
                            y: -100
                        })
                    }
                },
                y: 0,
                autoAlpha: 1,
            })
        else
            gsap.fromTo(nameChars, {
                autoAlpha: 0,
                y: 100,
            }, {
                scrollTrigger: {
                    trigger: '.content',
                    start: window.innerHeight/2 + offset - 300,
                    end: "+=100",
                    scrub: 1,
                    onLeave: () => {
                        gsap.fromTo(nameChars, {
                            autoAlpha: 1,
                        }, {
                            scrollTrigger: {
                                trigger: '.content',
                                start: window.innerHeight/2 + offset + 1700 - 300,
                                end: "+=100",
                                scrub: 1,
                            },
                            stagger: 0.02,
                            autoAlpha: 0,
                            y: -100
                        })
                    }
                },
                stagger: 0.02,
                autoAlpha: 1,
                y: 0
            })

        // Project Description Scrub Animation
        let tl = new gsap.timeline({scrollTrigger: {
            trigger: '.content',
            start: offset ? window.innerHeight/2 + offset - 300 : 'top center',
            end: "+=2000",
            scrub: 1,
        }})
        tl.fromTo(descRef.current, {
            y: 300,
            autoAlpha: 0,
        }, {
            y: 0,
            autoAlpha: 1,
            ease: "power1",
            duration: 2,
        }).to(descRef.current, {
            autoAlpha: 0,
            scale: 0.5,
        })
    })

    return <div className={'project-container' + (first ? '' : ' absolute-container')} ref={containerRef} >
            <div className='project-pictures'>
                <ImageSlider direction="up" horizontal_align="left" containerRef={containerRef} offset={offset} project={project}/>
                <ImageSlider direction="down" horizontal_align="right" containerRef={containerRef} offset={offset} project={project}/>
            </div>
            <div className='project-infos'>
                <div className='project-name' ref={nameRef}>{project.name}</div>
                <div className='project-desc' ref={descRef}>{project.description}</div>
            </div>
        </div>
}