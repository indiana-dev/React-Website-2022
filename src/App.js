import TopPage from './components/TopPage';
import Cursor from './components/Cursor';
import ArtworkManager from './components/ArtworkManager';
import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Background from './components/Background';
import './App.css';
import ProjectDetails from './components/ProjectDetails';
import { useEffect, useRef, useState } from 'react';
import Projects from './projects';
import Footer from './components/Footer';

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

  function getCurrentProject() {
    return Projects.filter(p => p.id === showDetails)[0]
  }

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
    <Background current={current} showDetails={showDetails} />
      { showDetails ? 
        <ProjectDetails setShowDetails={setShowDetails_} project={getCurrentProject()}/> 
        : 
        <>
          <TopPage current={current} setCurrent={setCurrent} />
          <ArtworkManager current={current} setShowDetails={setShowDetails_} />
        </>
      }
      <Footer />
      <Header current={current} showDetails={showDetails} />
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