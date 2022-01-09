import './styles.scss'
import {  useLayoutEffect, useRef } from 'react'
import gsap from 'gsap/all'
import { getHeight } from '../../context/MobileContext'

export default function ImageSlider({
    direction,
    horizontal_align,
    artwork,
    isMobile,
}) {
    const slider = useRef()

    useLayoutEffect(() => {
        const vh = getHeight()
        const elmHeight = slider.current.clientHeight

        let tl = new gsap.timeline({
            scrollTrigger: artwork.scrollTrigger({scrub: true})
        })
        
        if (isMobile) {
            tl = gsap.fromTo(slider.current, {
                // x: '100vw',
                x: 0,
                xPercent: 100
            }, {
                // x: '-100vw',
                x: -elmHeight * artwork.imagesCount * 0.9,
                // xPercent: 0,
                scrollTrigger: artwork.scrollTrigger({scrub: true})
            })
        }
        else
            tl.fromTo(slider.current, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                duration: 0.2
            })
            .fromTo(slider.current, {
                y: direction === 'up' ? -elmHeight-vh*0.2 : vh*0.2,
            }, {
                y: direction === 'up' ? vh*0.2 : -elmHeight-vh*0.2,
                ease: "none",
            }, '<')
            .to(slider.current, {
                autoAlpha: 0,
                duration: 0.2,
            }, '>-=0.2')

        return () => {
            tl.kill()
        }
    })

    function createImages() {
        let images = []

        for (let i = 0; i < artwork.imagesCount/(isMobile ? 1 : 2); i++) {
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

    return <div className={isMobile ? "image-slider-mobile" : "image-slider"} 
                ref={slider}
                style={horizontal_align === 'left' ? {left: '2vw'} : {right: '2vw'}}
            >
        {createImages()}
    </div>
}