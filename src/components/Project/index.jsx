import gsap from 'gsap/all'
import { useEffect, useRef } from 'react'
import './styles.scss'

export default function Project({
    first=false,
    project
}) {
    const containerRef = useRef()
    const infoRef = useRef()
    const nameRef = useRef()
    const descRef = useRef()

    useEffect(() => {
        const duration = 0.3
        const stagger = 0.1

        let t = new gsap.timeline({
            scrollTrigger: project.scrollTrigger({
                toggleActions: 'restart none none none',
                onLeave: () => {
                    if (t.reversed()) t.play('Appear')
                    else t.resume('Appear')
                },
                onEnterBack: () => {
                    containerRef.current.style.display = 'flex'
                    t.reverse('Disappear')
                },
                onLeaveBack: () => {
                    if (t.reversed()) t.resume()
                    else t.reverse()
                },
            }),
            onStart: () => {
                containerRef.current.style.display = 'flex'
            },
            onComplete: () => {
                containerRef.current.style.display = 'none'
            },
            onReverseComplete: () => {
                containerRef.current.style.display = 'none'
            }
        }).from(infoRef.current.children, {
            autoAlpha: 0,
            rotateY: -90,
            duration: duration,
            stagger: stagger,
            ease: 'linear',
            clearProps: 'transform',
        })
        .addPause()
        .addLabel('Appear')
        .to(infoRef.current.children, {
            autoAlpha: 0,
            rotateY: 90,
            duration: duration,
            stagger: stagger,
            ease: 'linear',
            clearProps: 'transform'
        })
        .addLabel('Disappear')

        if (!first) containerRef.current.style.display = 'none'

        return () => {
            t.kill()
        }
    }, [project, first])

    console.log('first',first,project.name)
    return <div className={'project-container' + (!first||true ? ' absolute-container' : '')} ref={containerRef}>
        <div className='project-infos' ref={infoRef}>
                <div className='project-name' ref={nameRef}>{project.name}</div>
                <div className='project-desc' ref={descRef}>
                    {project.description}<br />
                </div>
                <div className='project-button learn-more-btn'>Learn More</div>
                <div className='project-button open-github-btn'>Open on Github</div>
        </div>
    </div>
}