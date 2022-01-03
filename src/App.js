import TopPage from './components/TopPage';
import Cursor from './components/Cursor';
import ArtworkManager from './components/ArtworkManager';
import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Background from './components/Background';
import './App.css';
import { useState } from 'react/cjs/react.development';
import ProjectDetails from './components/ProjectDetails';
import { useEffect, useRef } from 'react';

function Body() {
  const [showDetails, setShowDetails] = useState(false)
  const [current, setCurrent] = useState(0)
  const lastScrollY = useRef(null)

  function setShowDetails_(value) {
    if (value !== false) {
      lastScrollY.current = {value: window.scrollY, jumpTo: false}
    }

    setShowDetails(value)
  }

  useEffect(() => {
    function mouseMove({ screenX: x, screenY: _ }) {
      if (window.scrollY > window.innerHeight/2 || showDetails) return
      if (x > window.innerWidth/2 && current === 0) {
          setCurrent(1)
      } else if (x < window.innerWidth/2 && current === 1) {
          setCurrent(0)
      }
    }

    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [current, showDetails])

  useEffect(() => {
    if (lastScrollY.current) {
      if (lastScrollY.current.jumpTo) {
        window.scrollTo(0, lastScrollY.current.value)
        lastScrollY.current = null
      } else {
        lastScrollY.current.jumpTo = true
      }
    }
  })

  return <> 
    <Background showDetails={showDetails} />
      { showDetails ? 
        <ProjectDetails setShowDetails={setShowDetails_} /> 
        : 
        <>
          <TopPage />
          <ArtworkManager current={current} setShowDetails={setShowDetails_} />
          <Header />
        </>
      }
    </>
}

function App() {
  gsap.registerPlugin(ScrollTrigger);

  return <div>
      <div id="viewport">
          <Cursor />
          <Body />
      </div>
    </div>
}

export default App;