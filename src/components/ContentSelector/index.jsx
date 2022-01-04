import gsap from 'gsap/all';
import { useContext, useEffect, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { CursorContext } from '../../context/CursorContext';
import './styles.scss'

export default function ContentSelector({
    current,
    setCurrent,
}) {
    let g = useRef()
    const selectorRef = useRef()
    const { type, setType } = useContext(CursorContext)

    // useEffect(() => {
    //     if (g.current) {
    //         g.current.restart()
    //         g.current.kill()
    //     }
    //     g.current = gsap.to(selectorRef.current, {
    //         scrollTrigger: {
    //             start: 0,
    //             end: '+=' + window.innerHeight/2,
    //             scrub: true,
    //         },
    //         x: () => currentIndex === 0 ? '25%' : '-25%',
    //     })
    // }, [currentIndex])

    // function getText(selected) {
    //     let text = 'Scroll to '
    //     let charCount = text.length

    //     if (selected) return text.slice(-Math.ceil((1-progress)*charCount)) + ' see my '
    //     else {
    //         let end = Math.ceil((progress)*charCount)
    //         return end === 0 ? 'See my ' : text.slice(-end) + ' see my '
    //     }
    // }

    // function buildSelector(name, currentIndex) {
    //     let selected = index === currentIndex
    //     let className = 'bottom-selector-text ' + (selected ? 'selected' : '')
    //     let text = (selected ? 'Scroll to see my ' : 'See my ') + name

    //     return <div className={className}>
    //         <p>{text}</p>
    //         <FaChevronDown />
    //     </div>
    // }

    function buildSelector(name, index) {
        let selected = index === current
        let className = 'bottom-selector-text ' + (selected ? 'selected' : '')

        return <div 
            className={className} 
            onClick={ () => {
                if (index !== current) setCurrent(index)
            }}
        ><span
            onMouseEnter={()=>setType(1)}
            onMouseLeave={()=>setType(0)}
        >{name}</span></div>
    }
    
    return <div className='bottom-selector' ref={selectorRef}>
        {buildSelector('Artworks', 0)}
        {buildSelector('Projects', 1)}
    </div>
}