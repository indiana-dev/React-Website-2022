import gsap, { SlowMo } from "gsap/all"
import { useContext, useLayoutEffect, useRef } from "react"
import { MobileContext } from "../../context/MobileContext"
import './styles.scss'

gsap.registerPlugin(SlowMo)

export default function VideoSlider({
    artwork,
}) {
    const slider = useRef()
    const isMobile = useContext(MobileContext)

    useLayoutEffect(() => {
        let tl = new gsap.timeline({
            scrollTrigger: artwork.scrollTrigger({scrub: true})
        })

        if (isMobile) {
            tl = gsap.fromTo(slider.current, {
                x: '100vw',
                xPercent: 100
            }, {
                x: '-100vw',
                xPercent: -100,
                scrollTrigger: artwork.scrollTrigger({scrub: true})
            })
        }
        else tl.to(slider.current.children, {
                autoAlpha: 1,
                scale: 1.5,
                stagger: 1,
                ease: 'expo',
            }).to(slider.current.children, {
                autoAlpha: 0,
                scale: 2,
                stagger: 1,
                ease: 'expo',
            }, '<+=1')

        return () => {
            tl.kill()
        }
    })

    function createVideos() {
        let videos = []

        for (let i = 0; i < artwork.imagesCount; i++) {
            // let imageIndex = horizontal_align === 'left' ? i : artwork.imagesCount-i-1
            let extension = artwork.video ? '' : '.png'
            let imagePath = 'assets/images/' + artwork.imagesPath + '/' + i + extension

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