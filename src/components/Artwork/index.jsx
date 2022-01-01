import gsap from 'gsap/all'
import { useEffect, useRef } from 'react'
import { SplitText } from '../../libraries/Split3.min'
import VideoSlider from '../VideoSlider'
import ImageSlider from '../ImageSlider'
import './styles.scss'

export default function Artwork({
    first=false,
    artwork,
}) {
    const containerRef = useRef()
    const nameRef = useRef()
    const descRef = useRef()

    useEffect(() => {
        let nameChars = new SplitText(nameRef.current).chars

        let t = new gsap.timeline({
            scrollTrigger: artwork.scrollTrigger({
                toggleActions: 'restart none none none',
                onLeave: () => {
                    if (t.reversed()) t.play('Appear')
                    else t.resume('Appear')
                },
                onEnterBack: () => {
                    t.reverse('Disappear')
                },
                onLeaveBack: () => {
                    if (t.reversed()) t.resume()
                    else t.reverse()
                },
                onUpdate: (u) => {
                    let currentDisplay = containerRef.current.style.display
                    if (currentDisplay === 'none' && u.isActive) containerRef.current.style.display = 'flex'
                    else if (currentDisplay !== 'none' && !u.isActive) containerRef.current.style.display = 'none'
                },
            })
        })
        .fromTo(nameChars, {
            y: '100%',
        }, {
            y: 0,
            autoAlpha: 1,
            stagger: 0.02,
            duration: 0.3,
            ease: 'expo'
        }
        )
        .addPause()
        .addLabel('Appear')
        .to(nameChars, {
            autoAlpha: 0,
            y: '-100%',
            stagger: 0.02,
            duration: 0.3,
            ease: 'expo'
        })
        .addLabel('Disappear')

        // Artwork Description Scrub Animation
        let tl = new gsap.timeline({
            scrollTrigger: artwork.scrollTrigger({scrub: 2})
        })
        tl.fromTo(descRef.current, {
            y: 300,
        }, {
            y: 0,
            autoAlpha: 1,
            ease: "power1",
            duration: 2,
        }).to(descRef.current, {
            autoAlpha: 0,
            scale: 0.5,
        })

        if (!first) containerRef.current.style.display = 'none'

        return () => {
            t.kill()
        }
    }, [artwork, first])

    return <div className={'artwork-container' + (first ? '' : ' absolute-container')} ref={containerRef} >
            <div className='artwork-pictures'>
                { artwork.video ? <VideoSlider artwork={artwork} /> 
                : <>
                <ImageSlider direction="up" horizontal_align="left" artwork={artwork}/>
                <ImageSlider direction="down" horizontal_align="right" artwork={artwork}/>
                </>}
            </div>
            <div className='artwork-infos'>
                <div className='artwork-name' ref={nameRef}>{artwork.name}</div>
                <div className='artwork-desc' ref={descRef}>
                    {artwork.description}<br />
                    <div className='artwork-button'>Not yet available</div>
                </div>
            </div>
        </div> 
}