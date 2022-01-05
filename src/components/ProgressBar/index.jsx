import gsap from 'gsap/all'
import { useEffect, useLayoutEffect, useRef } from 'react'
import getProjects, { getTotalHeight } from '../../projects'
import BackToTopButton from '../BackToTopButton'
import './styles.scss'

export default function ProgressBar({
    current,
    showDetails
}) {
    const ref = useRef()
    const lineRef = useRef()
    const dotsRef = useRef()
    const projects = useRef(null)

    if (!projects.current) projects.current = getProjects()

    useLayoutEffect(() => {   
        const dots = dotsRef.current.children

        // Dots completion animation
        for (let [i, dot] of Object.entries(dots)) { 
            const p = projects.current[i]

            gsap.to(dot, {
                scrollTrigger: {
                    trigger: '.content',
                    start: p.first ? 'top center' : 'top top-=' + p.offset + 'px',
                    toggleActions: 'restart none none reverse'
                },
                backgroundColor: 'black',
                ease: 'expo.inOut',
                duration: 0.25
            })
        }
    }, [])

    useEffect(() => {
        let a

        // Fade-in animation
        if (showDetails === false && current === 1)
            a = gsap.to(ref.current, {
                scrollTrigger: {
                    trigger: '.content',
                    start: 'top top',
                    toggleActions: 'restart none none reverse'
                },
                autoAlpha: 1,
            })
        else 
            a = gsap.to(ref.current, {
                autoAlpha: 0,
                duration: 0.2
            })

        return () => {
            a.kill()
        }
    }, [current, showDetails])

    useEffect(() => {
        const projectCount = projects.current.length
        const vh = window.innerHeight

        // Line progress animation
        const stepProgress = 100/(projectCount-1)

        let t = gsap.timeline({
            scrollTrigger: {
                trigger: '.content',
                start: 'top center',
                end: '+=' + Math.round(getTotalHeight(vh) - projects.current[projectCount-1].vh*vh + vh/2) + 'px',
                scrub: 1, 
            },
        })

        for (let i = 0; i < projectCount-1; i++) {
            t.to(lineRef.current, {
                height: ((i+1)*stepProgress-(i===projectCount-2?0:5)) + '%',
                duration: projects.current[i].vh,
                ease: 'none'
            })
        }

        return () => {
            t.kill()
        }
    }, [])

    function buildDots() {
        return projects.current.map(p => <div className='progress-dot' key={p.id}></div>)
    }

    return <div className='progress-bar' ref={ref}>
        <div className='progress-bar-line-container'>
            <div className='progress-background-line' ref={lineRef}/>
            <div className='progress-bar-elements' ref={dotsRef}>
                {buildDots()}
            </div>
        </div>
        <BackToTopButton />
    </div>
}