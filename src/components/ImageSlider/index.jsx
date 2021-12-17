import './styles.scss'
import { useEffect, useRef } from 'react'
import gsap from 'gsap/all'

export default function ImageSlider({
    direction,
    horizontal_align,
    containerRef,
    offset,
    project,
}) {
    const vh = window.innerHeight
    const slider = useRef()

    useEffect(() => {
        const elmHeight = slider.current.clientHeight
        let tl = gsap.timeline({
            scrollTrigger: {
            trigger: containerRef.current,
            start: offset ? window.innerHeight/2 + offset - 300 : 'top top',
            scrub: 0.5,
            end: "+=" + (2000-vh),
            // markers: true,  
        }})
        
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

        for (let i = 0; i < project.imagesCount/2; i++) {
            let imagePath = 'assets/images/' + project.imagesPath + '/' + (horizontal_align==='left' ? i : project.imagesCount-i-1) + '.png'
            images.push(<img src={imagePath} key={imagePath} alt=""></img>)
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