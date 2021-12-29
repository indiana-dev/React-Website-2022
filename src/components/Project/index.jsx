import gsap from 'gsap/all'
import { useEffect, useRef } from 'react'
import { SplitText } from '../../libraries/Split3.min'
import VideoSlider from '../VideoSlider'
import ImageSlider from '../ImageSlider'
import './styles.scss'

export default function Project({
    first=false,
    project,
}) {
    const containerRef = useRef()
    const nameRef = useRef()
    const descRef = useRef()

    useEffect(() => {
        let nameChars = new SplitText(nameRef.current).chars

        let t = new gsap.timeline({
            scrollTrigger: project.scrollTrigger({
                toggleActions: 'restart none none none',
                onLeave: () => {
                    if (t.reversed()) t.play('Appear')
                    else t.resume('Appear')
                },
                onEnterBack: () => {
                    t.reverse('Disappear')
                },
                onLeaveBack: () => {
                    if (t.reversed()) t.resume()
                    else t.reverse()
                },
            })
        })
        .fromTo(nameChars, {
            y: '100%',
        }, {
            y: 0,
            autoAlpha: 1,
            stagger: 0.02,
            duration: 0.3,
            ease: 'expo'
        }
        )
        .addPause()
        .addLabel('Appear')
        .to(nameChars, {
            autoAlpha: 0,
            y: '-100%',
            stagger: 0.02,
            duration: 0.3,
            ease: 'expo'
        })
        .addLabel('Disappear')

        // Project Description Scrub Animation
        let tl = new gsap.timeline({
            scrollTrigger: project.scrollTrigger({scrub: 2})
        })
        tl.fromTo(descRef.current, {
            y: 300,
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
                { project.video ? <VideoSlider project={project} /> 
                : <>
                <ImageSlider direction="up" horizontal_align="left" project={project}/>
                <ImageSlider direction="down" horizontal_align="right" project={project}/>
                </>}
            </div>
            <div className='project-infos'>
                <div className='project-name' ref={nameRef}>{project.name}</div>
                <div className='project-desc' ref={descRef}>{project.description}</div>
            </div>
        </div>
}