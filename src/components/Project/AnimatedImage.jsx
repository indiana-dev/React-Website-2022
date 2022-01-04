import gsap from "gsap/all"
import { useEffect, useRef } from "react"

export default function AnimatedImage({
    src,
    project,
    size,
    left,
    right,
    center,
    start,
    end,
    pixelArt=false,
}) {
    const ref = useRef()

    useEffect(() => {
        let offset = project.offset/window.innerHeight*100*0
        let startDistance = 120 + start*project.vh*100 + offset
        let endDistance = (1-end)*100*project.vh + offset

        let a = gsap.fromTo(ref.current, {
            yPercent: 0,
            y: startDistance + 'vh',
            x: center ? '-50%' : undefined,
        }, {
            scrollTrigger: project.scrollTrigger({
                scrub: 1,             
            }),
            yPercent: -120,
            y: endDistance + 'vh',
        })

        return () => {
            a.kill()
        }
    }, [project, start, end, center])

    const style = {
        width: (size*100)+'%',
        left: center ? '50%' : (right ? null : (left*100)+'%'),
        right: left ? null : (right*100)+'%',
        imageRendering: pixelArt ? 'pixelated' : null,
    }

    const isMP4 = src.slice(-4) === '.mp4'
    const isWebM = src.slice(-5) === '.webm'
    const isVideo = isMP4 || isWebM

    return isVideo ? 
        <video className="project-image" ref={ref} style={style} autoPlay muted loop playsInline>
            { isWebM ? <source src={src} type="video/webm"></source> : null }
            { isMP4 ? <source src={src} type="video/mp4"></source> : null }
            <source src={src} type="video/mp4"></source>
        </video>
        :
        <img className="project-image" src={src} alt="" ref={ref} style={style}></img>
}