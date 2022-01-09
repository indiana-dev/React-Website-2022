import gsap from 'gsap/all'
import { useEffect, useRef } from 'react'
import { FaArrowCircleLeft } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import Footer from '../Footer'
import './styles.scss'

export default function ProjectDetails({
    project,
    setShowDetails
}) {
    const ref = useRef()
    const backBtnRef = useRef()

    // Back Button Animation
    useEffect(() => {
        function getDocumentHeight() {
            var body = document.body, html = document.documentElement;
            return Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
        }

        let t = gsap.to(backBtnRef.current, {
            scrollTrigger: {
                end: '+=' + getDocumentHeight() + 'px',
                scrub: 1,
            },
            y: '-100%',
        })

        return () => {
            t.kill()
        }
    }, [])

    // Scroll To Top and Start Fade In Animation
    useEffect(() => {
        window.scrollTo(0, 0)

        gsap.fromTo(ref.current, {
            scale: 0.8,
        }, {
            autoAlpha: 1,
            scale: 1,
            duration: 0.5,
            ease: 'power2'
        })
    }, [])

    // Back button hover effect
    useEffect(() => {
        gsap.to(backBtnRef.current, {
            autoAlpha: 1,
            duration: 0.5,
            ease: 'power2'
        })

        const duration = 0.25
        const hoverAnimation = gsap.to(backBtnRef.current, {
            scale: 1.25,
            paused: true,
            duration: duration,
            ease: 'power2'
        })

        backBtnRef.current.addEventListener('mouseenter', () => hoverAnimation.play())
        backBtnRef.current.addEventListener('mouseleave', () => hoverAnimation.reverse())
    }, [])

    return <div className='project-details'>
        <div className='project-details-content' ref={ref}>
            <div className='project-details-name'>Project Review:<br/><p>{project.name}</p></div>
            <ReactMarkdown 
                className='project-details-md' 
                children={project.markdown} 
                rehypePlugins={[rehypeRaw]} 
            />
            { project.github ?
                <div className="link_wrapper">
                    <span onClick={()=>window.open(project.github)}>Open project on Github</span>
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                            <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
                        </svg>
                    </div>
                </div> : null }
        </div>
        <Footer />
        <div className='project-details-back-button' ref={backBtnRef} onClick={() => setShowDetails(false) }>
            <FaArrowCircleLeft />
        </div>
    </div>
}