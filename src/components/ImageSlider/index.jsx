import './styles.scss'
import { useEffect, useRef } from 'react'
import gsap from 'gsap/all'

export default function ImageSlider({
    direction,
    horizontal_align,
    artwork,
}) {
    const vh = window.innerHeight
    const slider = useRef()

    useEffect(() => {
        const elmHeight = slider.current.clientHeight

        let tl = new gsap.timeline({
            scrollTrigger: artwork.scrollTrigger({scrub: true})
        })
        
        tl.fromTo(slider.current, {autoAlpha: 0}, {
            autoAlpha: 1
        }).from(slider.current, {
            y: direction === 'up' ? vh : -elmHeight,
            ease: "none",
        }, "<").to(slider.current, {
            y: direction === 'up' ? -elmHeight : vh,
            ease: "none",
        }).set(slider.current, {
            autoAlpha: 0
        })
    })

    function createImages() {
        let images = []

        for (let i = 0; i < artwork.imagesCount/2; i++) {
            let imageIndex = horizontal_align === 'left' ? i : artwork.imagesCount-i-1
            let extension = artwork.video ? '' : '.png'
            let imagePath = 'assets/images/' + artwork.imagesPath + '/' + imageIndex + extension

            if (artwork.video) images.push(<video autoPlay muted loop playsInline key={imagePath}>
                    <source src={imagePath+'.webm'} type="video/webm"></source>
                    <source src={imagePath+'.mp4'} type="video/mp4"></source>
                </video>)
            else images.push(<img src={imagePath} key={imagePath} alt=""></img>)
        }
        
        return images
    }

    return <div className="image-slider" 
                ref={slider}
                style={horizontal_align === 'left' ? {left: '2vw'} : {right: '2vw'}}
            >
        {createImages()}
    </div>
}