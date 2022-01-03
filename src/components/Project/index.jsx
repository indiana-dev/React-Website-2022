import gsap from 'gsap/all'
import { useEffect, useRef } from 'react'
import ProjectASL from './ProjectASL'
import ProjectCausality from './ProjectCausality'
import ProjectJetpack from './ProjectJetpack'
import ProjectLandscape from './ProjectLandscape'
import './styles.scss'

export default function Project({
    first=false,
    project,
    setShowDetails
}) {
    const timeline = useRef()
    const containerRef = useRef()
    const infoRef = useRef()
    const nameRef = useRef()
    const descRef = useRef()

    function clickOnShowDetails() {
        setShowDetails(project.id)
    }

    useEffect(() => {
        const duration = 0.3
        const stagger = 0.1

        timeline.current = new gsap.timeline({
            scrollTrigger: project.scrollTrigger({
                toggleActions: 'restart none none none',
                onLeave: () => {
                    timeline.current.play('Appear')
                },
                onEnterBack: () => {
                    containerRef.current.style.display = 'flex'
                    timeline.current.reverse(0)
                },
                onLeaveBack: () => {
                    timeline.current.reverse('Appear')
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
            },
        }).from(infoRef.current.children, {
            autoAlpha: 0,
            rotateY: -90,
            duration: duration,
            stagger: stagger,
            ease: 'linear',
        })
        .addPause()
        .addLabel('Appear')
        .to(infoRef.current.children, {
            autoAlpha: 0,
            rotateY: 90,
            duration: duration,
            stagger: stagger,
            ease: 'linear',
        })

        if (!first) containerRef.current.style.display = 'none'

        return () => {
            timeline.current.kill()
        }
    }, [project, first])

    function buildProject() {
        switch (project.id) {
            case 'asl': return <ProjectASL project={project} />
            case 'causality': return <ProjectCausality project={project} />
            case 'jetpack': return <ProjectJetpack project={project} />
            case 'landscape': return <ProjectLandscape project={project} />
            default: return null
        }
    }

    return <div className='project-container absolute-container' ref={containerRef}>
        <div className='project-infos' ref={infoRef}>
                <div className='project-name' ref={nameRef}>{project.name}</div>
                <div className='project-desc' ref={descRef}>
                    {project.description}<br />
                </div>
                <button className='project-button learn-more-btn' onClick={clickOnShowDetails}>Learn More</button>
                <button className='project-button open-github-btn'>Open on Github</button>
        </div>
        <div className='project-media'>
            {buildProject()}
        </div>
    </div>
}