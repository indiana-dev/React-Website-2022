import gsap from 'gsap/all'
import { useLayoutEffect, useRef } from 'react'
import ProjectASL from './ProjectASL'
import ProjectCausality from './ProjectCausality'
import ProjectJetpack from './ProjectJetpack'
import ProjectLandscape from './ProjectLandscape'
import ProjectTicTacToe from './ProjectTicTacToe'
import './styles.scss'

export default function Project({
    first=false,
    project,
    setShowDetails
}) {
    const timeline = useRef()
    const containerRef = useRef()
    const infoRef = useRef()
    const mediaRef = useRef()
    const nameRef = useRef()
    const descRef = useRef()

    function clickOnShowDetails() {
        const duration = 0.5
        const ease = 'power2'

        gsap.to(mediaRef.current, {
            x: '100%',
            duration: duration,
            ease: ease,
        })

        gsap.to(infoRef.current, {
            x: '-100%',
            duration: duration,
            ease: ease,
            onComplete: () => setShowDetails(project.id)
        })
    }

    useLayoutEffect(() => {
        const duration = 0.3
        const stagger = 0.1

        timeline.current = new gsap.timeline({
            scrollTrigger: project.scrollTrigger({
                toggleActions: 'restart none none none',
                onLeave: () => {
                    timeline.current.play('Appear')
                },
                onEnterBack: () => {
                    containerRef.current.style['pointer-events'] = ''
                    timeline.current.reverse(0)
                },
                onLeaveBack: () => {
                    timeline.current.reverse('Appear')
                },
            }),
            onStart: () => {
                containerRef.current.style['pointer-events'] = ''
            },
            onComplete: () => {
                containerRef.current.style['pointer-events'] = 'none'
            },
            onReverseComplete: () => {
                containerRef.current.style['pointer-events'] = 'none'
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

        if (!first) containerRef.current.style['pointer-events'] = 'none'

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
            case 'tictactoe': return <ProjectTicTacToe project={project} />
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
                { project.github ? <button className='project-button open-github-btn' onClick={()=>window.open(project.github)}>Open on Github</button> : null }
                { project.try_it ? <button className='project-button try-it-btn' onClick={()=>window.open(project.try_it)}>Live Demo</button> : null }
                { project.project_page ? <button className='project-button project-page-btn' onClick={()=>window.open(project.project_page)}>Open Project Page</button> : null }
        </div>
        <div className='project-media' ref={mediaRef}>
            {buildProject()}
        </div>
    </div>
}