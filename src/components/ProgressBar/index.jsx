import gsap from 'gsap/all'
import { useEffect, useRef } from 'react'
import Projects, { getTotalHeight } from '../../projects'
import './styles.scss'

export default function ProgressBar() {
    const ref = useRef()
    const lineRef = useRef()

    useEffect(() => {
        const vh = window.innerHeight

        let t = new gsap.timeline({
            scrollTrigger: {
                trigger: '.content',
                start: 'top center',
                end: '+=' + getTotalHeight(vh) + 'px',
                scrub: true, 
            },
        })        

        for (let dot of Array.from(ref.current.children).filter(c => c.className === 'progress-dot')) {            
            t.to(dot, {
                backgroundColor: 'black',
                ease: 'expo',
            })
        }

        return () => {
            t.kill()
        }
    }, [])

    useEffect(() => {
        const vh = window.innerHeight

        let a1 = gsap.to(ref.current, {
            scrollTrigger: {
                trigger: '.content',
                start: 'top center',
                end: '+=500px',
                scrub: true, 
            },
            autoAlpha: 1
        })

        let a2 = gsap.to(lineRef.current, {
            scrollTrigger: {
                trigger: '.content',
                start: 'top center',
                end: '+=' + getTotalHeight(vh) + 'px',
                scrub: true, 
            },
            width: '100%',
        })

        return () => {
            a1.kill()
            a2.kill()
        }
    }, [])

    function buildDots() {
        let dots = []

        for (let p of Projects) {
            dots.push(<div className='progress-dot' key={p.id}></div>)
        }

        return dots
    }

    return <div className='progress-bar' ref={ref}>
        <div className='progress-background-line' ref = {lineRef}/>
        {buildDots()}
    </div>
}