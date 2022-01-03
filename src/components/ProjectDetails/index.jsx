import { useEffect } from 'react'
import { useRef } from 'react/cjs/react.development'
import './styles.scss'

export default function ProjectDetails({
    setShowDetails
}) {
    const ref = useRef()

    useEffect(() => {
        console.log('SCROLLTO')
        window.scrollTo(0, 0)
    }, [])

    // useEffect(() => {
    //     // let t = gsap.to(ref.current, {
    //     //     scrollTrigger: {
    //     //         start: window.scrollY,
    //     //         end: '+=' + window.innerHeight,
    //     //         scrub: 2,
    //     //     },
    //     //     y: '-100%'
    //     // })

    //     // return () => {
    //     //     t.kill()
    //     // }
    // }, [])

    return <div className='project-details' ref={ref}>
        <p>Texte</p>
        <img src={'assets/images/landscape/ls1.png'} alt=""></img>
        <p>Texte</p>
        <img src={'assets/images/landscape/ls2.png'} alt=""></img>
        <p>Texte</p>
        <img src={'assets/images/landscape/ls3.png'} alt=""></img>
        <p>Texte</p>
        <button className='project-details-back-btn' onClick={() => setShowDetails(false)}>Go Back</button>
    </div>
}