import gsap from 'gsap/all';
import { FaArrowUp } from 'react-icons/fa'
import './styles.scss'

export default function BackToTopButton() {
    function click() {
        gsap.to(window, {duration: 1, scrollTo:{y: 0}, ease:'power2'});
    }

    return <div className='back-to-top-btn' onClick={click}>
        <FaArrowUp fontSize={'2em'}/>
        <p>Top</p>
    </div>
}