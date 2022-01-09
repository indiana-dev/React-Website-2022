import gsap from 'gsap/all'
import { useContext, useLayoutEffect, useRef } from 'react'
import { SplitText } from '../../libraries/Split3.min'
import VideoSlider from '../VideoSlider'
import ImageSlider from '../ImageSlider'
import './styles.scss'
import { MobileContext } from '../../context/MobileContext'

export default function Artwork({
    first=false,
    artwork,
}) {
    const containerRef = useRef()
    const nameRef = useRef()
    const descRef = useRef()
    const isMobile = useContext(MobileContext)
    const nameChars = useRef()

    useLayoutEffect(() => {
        if (!nameChars.current) nameChars.current = new SplitText(nameRef.current).chars

        let t = new gsap.timeline({
            scrollTrigger: artwork.scrollTrigger({
                toggleActions: 'restart none none none',
                onLeave: () => {
                    t.play('Appear')
                },
                onEnterBack: () => {
                    t.reverse(0)
                },
                onLeaveBack: () => {
                    t.reverse('Appear')
                },
            })
        })
        .fromTo(nameChars.current, {
            y: '100%',
            autoAlpha: 0,
        }, {
            y: '0%',
            autoAlpha: 1,
            stagger: 0.02,
            duration: 0.3,
            ease: 'expo'
        })
        .addPause()
        .addLabel('Appear')
        .to(nameChars.current, {
            autoAlpha: 0,
            y: '-100%',
            stagger: 0.02,
            duration: 0.3,
            ease: 'expo'
        })

        // Artwork Description Scrub Animation
        let tl = new gsap.timeline({
            scrollTrigger: artwork.scrollTrigger({scrub: 2})
        })  

        tl.fromTo(descRef.current, {
            y: isMobile ? 50 : 100,
            autoAlpha: 0,
        }, {
            autoAlpha: 1,
            y: 0,
            ease: isMobile ? "power2" : "power4",
            duration: 2,
            scale: 1
        }).to(descRef.current, {
            autoAlpha: 0,
            scale: 0.5,
        })

        return () => {
            t.kill()
            tl.kill()
        }
    }, [artwork, first, isMobile])

    function buildArtworkPictures() {
        return <div className='artwork-pictures'>
            { artwork.video ? 
                <VideoSlider artwork={artwork} /> 
                : isMobile ? 
                    <ImageSlider isMobile={true} artwork={artwork}/> 
                    : 
                    <>
                        <ImageSlider direction="up" horizontal_align="left" artwork={artwork}/>
                        <ImageSlider direction="down" horizontal_align="right" artwork={artwork}/>
                    </>
            }
        </div>
    }

    function buildArtworkInfos() {
        return <div className='artwork-infos'>
            <div className='artwork-name' ref={nameRef}>{artwork.name}</div>
            <div className='artwork-desc' ref={descRef}>
                {artwork.description}<br />
                <div className='artwork-button'>Not yet available</div>
            </div>
        </div>
    }

    return <div className={'artwork-container' + (first ? '' : ' absolute-container')} ref={containerRef} >
            { isMobile ? buildArtworkInfos() : buildArtworkPictures() }
            { isMobile ? buildArtworkPictures() : buildArtworkInfos() }
        </div> 
}