import { useContext, useRef } from 'react';
import { CursorContext } from '../../context/CursorContext';
import './styles.scss'

export default function ContentSelector({
    current,
    setCurrent,
}) {
    const selectorRef = useRef()
    const { setType } = useContext(CursorContext)

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