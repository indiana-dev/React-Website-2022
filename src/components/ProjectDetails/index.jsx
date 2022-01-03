import gsap from 'gsap/all'
import { useEffect, useRef } from 'react'
import { FaArrowCircleLeft } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import './styles.scss'

export default function ProjectDetails({
    project,
    setShowDetails
}) {
    const backBtnRef = useRef()

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
            y: '-200%',
        })

        return () => {
            t.kill()
        }
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // useEffect(() => {
    //     // let t = gsap.to(ref.current, {
    //     //     scrollTrigger: {
    //     //         start: window.scrollY,
    //     //         end: '+=' + window.innerHeight,
    //     //         scrub: 2,
    //     //     },
    //     //     y: '-100%'
    //     // })

    //     // return () => {
    //     //     t.kill()
    //     // }
    // }, [])

    return <div className='project-details'>
        <ReactMarkdown 
            className='project-details-md' 
            children={project.markdown} 
            rehypePlugins={[rehypeRaw]} 
        />
        <div className="link_wrapper">
            <a href="/">Open project on Github</a>
            <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                    <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
                </svg>
            </div>
        </div>
        <div className='project-details-back-button' ref={backBtnRef} onClick={() => setShowDetails(false)  }>
            <FaArrowCircleLeft />
        </div>
    </div>
}