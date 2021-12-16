import './styles.scss'
import myImage from '../../assets/img.png'
import { useEffect, useRef } from 'react'
import gsap from 'gsap/all'

export default function ImageSlider({
    direction,
    horizontal_align
}) {
    const vh = window.innerHeight
    const slider = useRef()

    useEffect(() => {
        const elmHeight = slider.current.clientHeight
        console.log(elmHeight, 'h')
        let tl = gsap.timeline({
            scrollTrigger: {
            trigger: '.project-container',
            start: 'top top',
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

        for (let i = 0; i < 4; i++)
            images.push(<img src={myImage} id={"img_"+i} key={'img_'+i}></img>)
        
        return images
    }

    return <div className="image-slider" ref={slider}
     style={{'left': (horizontal_align === 'left' ? 100 : 500)}}
     >
        {createImages()}
    </div>
}