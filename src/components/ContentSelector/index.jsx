import gsap from 'gsap/all';
import { useEffect, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import './styles.scss'

export default function ContentSelector({
    index,
    progress,
}) {
    let g = useRef()
    const selectorRef = useRef()

    useEffect(() => {
        if (g.current) {
            g.current.restart()
            g.current.kill()
        }
        g.current = gsap.to(selectorRef.current, {
            scrollTrigger: {
                start: 0,
                end: '+=' + window.innerHeight/2,
                scrub: true,
            },
            x: () => index === 0 ? '25%' : '-25%',
        })
    }, [index])

    // function getText(selected) {
    //     let text = 'Scroll to '
    //     let charCount = text.length

    //     if (selected) return text.slice(-Math.ceil((1-progress)*charCount)) + ' see my '
    //     else {
    //         let end = Math.ceil((progress)*charCount)
    //         return end === 0 ? 'See my ' : text.slice(-end) + ' see my '
    //     }
    // }

    function buildSelector(name, currentIndex) {
        let selected = index === currentIndex
        let className = 'bottom-selector-text ' + (selected ? 'selected' : '')
        let text = (selected ? 'Scroll to see my ' : 'See my ') + name

        return <div className={className}>
            <p>{text}</p>
            <FaChevronDown />
        </div>
    }
    return <div className='bottom-selector' ref={selectorRef}>
        {buildSelector('artworks', 0)}
        {buildSelector('projects', 1)}
    </div>
}