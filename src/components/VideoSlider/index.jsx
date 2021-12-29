import gsap, { SlowMo } from "gsap/all"
import { useEffect, useRef } from "react"
import './styles.scss'

gsap.registerPlugin(SlowMo)

export default function VideoSlider({
    project,
}) {
    const slider = useRef()

    useEffect(() => {
        let tl = new gsap.timeline({
            scrollTrigger: project.scrollTrigger({scrub: true})
        })

        tl.to(slider.current.children, {
            autoAlpha: 1,
            scale: 2,
            stagger: 1,
            ease: 'expo',
        }).to(slider.current.children, {
            autoAlpha: 0,
            scale: 4,
            stagger: 1,
            ease: 'expo',
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