import gsap from 'gsap/all'
import { useLayoutEffect, useRef } from 'react'
import { FaArrowUp, FaDiscord, FaEnvelope, FaInstagram, FaTwitter } from 'react-icons/fa'
import { SplitText } from '../../libraries/Split3.min'
import './styles.scss'

export default function Contact({
    artworkManagerHeight
}) {
    const ref = useRef()
    const subTextRef = useRef()
    const contactMeTextRef = useRef()
    const iconsRef = useRef()
    const backButtonRef = useRef()

    useLayoutEffect(() => {
        const subTextChars = new SplitText(subTextRef.current).chars
        const contactChars = new SplitText(contactMeTextRef.current).chars

        const t = gsap.timeline({
            scrollTrigger: {
                start: artworkManagerHeight + window.innerHeight,
                toggleActions: 'restart none none none',
            },
        })

        const effect = {
            y: '100%',
            ease: 'power2',
            stagger: 0.02
        }

        t.from(subTextChars, effect)
         .from(contactChars, effect)
         .from(iconsRef.current.children, {
            autoAlpha: 0,
            y: '-100%',
            stagger: 0.25,
        })
        .from(backButtonRef.current, {
            autoAlpha: 0, scale: 1.1
        })

        return () => {
            t.kill()
        }
    }, [artworkManagerHeight])

    function backToTop() {
        gsap.to(window, {duration: 1, scrollTo:{y: 0}, ease:'power2'});
    }

    return <div className="contact" ref={ref}>
        <div className='big-text'>
            <div className='text-container' style={{flex: 1, justifySelf: 'end'}}>
                <div className='animation-overflow'><div className='like-my-work' ref={subTextRef}>You like my work ?</div></div>
                <div className='animation-overflow'><div className='contact-me' ref={contactMeTextRef}>Contact Me !</div></div>
            </div>
            <div className='icons-container' style={{flex: 1}} ref={iconsRef}>
                <div className='contact-link'><FaEnvelope /><p>alexandreb.dev@gmail.com</p></div>
                <div className='contact-link'><FaDiscord /><p>discord.gg/indiana-dev#0956</p></div>
                <div className='contact-link'><FaTwitter /><p>twitter.com/kishimisu</p></div>
                <div className='contact-link'><FaInstagram /><p>instagram.com/kishimisu</p></div>
            </div>
        </div>
        <div className='contact-back-to-top'>
            <span ref={backButtonRef} onClick={backToTop}>
                <FaArrowUp />
                <p>Back To Top</p>
            </span>
        </div>
    </div>
}