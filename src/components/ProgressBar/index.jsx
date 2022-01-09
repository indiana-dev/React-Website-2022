import gsap from 'gsap/all'
import { useLayoutEffect, useRef } from 'react'
import { getTotalHeight } from '../../projects'
import BackToTopButton from '../BackToTopButton'
import './styles.scss'

export default function ProgressBar({
    current,
    showDetails,
    projects,
}) {
    const ref = useRef()
    const lineRef = useRef()
    const dotsRef = useRef()
    const progressRef = useRef()

    useLayoutEffect(() => {
        const vh = window.innerHeight

        let a

        // Fade-in animation
        if (showDetails === false && current === 1)
            a = gsap.to(ref.current, {
                scrollTrigger: {
                    trigger: '.content',
                    start: 'top top',
                    end: Math.round(getTotalHeight(vh) + vh/2),
                    toggleActions: 'restart reverse restart reverse'
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

    useLayoutEffect(() => {
        const projectCount = projects.length
        const vh = window.innerHeight

        // Line progress animation
        const stepProgress = 100/(projectCount-1)

        let t = gsap.timeline({
            scrollTrigger: {
                trigger: '.content',
                start: 'top center',
                end: '+=' + Math.round(getTotalHeight(vh) - projects[projectCount-1].vh*vh + vh/2) + 'px',
                scrub: 1, 
            },
        })

        for (let i = 0; i < projectCount-1; i++) {
            t.to(lineRef.current, {
                height: ((i+1)*stepProgress-(i===projectCount-2?0:5)) + '%',
                duration: projects[i].vh,
                ease: 'none'
            })
        }

        const dots = dotsRef.current.children
        let anims = []
        for (let [i, dot] of Object.entries(dots)) { 
            const p = projects[i]

            let a = gsap.to(dot, {
                scrollTrigger: {    
                    start: p.offset + window.innerHeight,
                    toggleActions: 'restart none none reverse',
                },
                backgroundColor: 'black',
                ease: 'expo.inOut',
                duration: 0.25
            })
            anims.push(a)
        }

        return () => {
            t.kill()
            for (let a of anims) a.kill()
        }
    }, [projects])

    function buildDots() {
        return projects.map(p => <div className='progress-dot' key={p.name}></div>)
    }

    return <div className='progress-bar' ref={ref}>
        <div className='progress-bar-line-container' ref={progressRef}>
            <div className='progress-background-line' ref={lineRef}/>
            <div className='progress-bar-elements' ref={dotsRef}>
                {buildDots()}
            </div>
        </div>
        <BackToTopButton />
    </div>
}