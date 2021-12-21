import gsap from "gsap/all"
import { useEffect, useRef } from "react"
import './styles.scss'

export default function VideoSlider({
    project,
    containerRef,
    offset
}) {
    const vh = window.innerHeight
    const slider = useRef()

    useEffect(() => {
        // const elmHeight = slider.current.clientHeight
        // let tl = gsap.timeline({
        //     scrollTrigger: {
        //     trigger: containerRef.current,
        //     start: offset ? window.innerHeight/2 + offset  : 'top top',
        //     scrub: 0.5,
        //     end: "+=" + (2000-vh),
        //     // markers: true,  
        // }})

        // let tl = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: containerRef.current,
        //         start: offset ? window.innerHeight/2 + offset  : 'top top',
        //         scrub: 1,
        //         end: "+=" + (2000-vh),
        //     }
        // })

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: offset ? window.innerHeight/2 + offset  : 'top top',
                scrub: 1,
                end: '+=1333',
            }
        })

        tl.fromTo(slider.current.children, {
            autoAlpha: 0,
            y: -400,
        }, {
            stagger: 1,
            duration: 1,
            autoAlpha: 1,
            y: 0,
            scale: 1.5,
        }).to(slider.current.children, {
            stagger: 1,
            duration: 1,
            autoAlpha: 0,
            y: 400,
            scale: 1,
        }, '<+=1')
    })

    function createVideos() {
        let videos = []

        for (let i = 0; i < project.imagesCount; i++) {
            // let imageIndex = horizontal_align === 'left' ? i : project.imagesCount-i-1
            let extension = project.video ? '' : '.png'
            let imagePath = 'assets/images/' + project.imagesPath + '/' + i + extension

            videos.push(<video autoPlay muted loop playsInline key={imagePath}>
                    <source src={imagePath+'.webm'} type="video/webm"></source>
                    <source src={imagePath+'.mp4'} type="video/mp4"></source>
                </video>)
        }
        
        return videos
    }
    return <div className="video-slider" ref={slider}>
        {createVideos()}
    </div>
}