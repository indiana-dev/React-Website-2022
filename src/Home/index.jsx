import TopPage from '../components/TopPage';
import ArtworkManager from '../components/ArtworkManager';
import Header from '../components/Header';
import Background from '../components/Background';
import '../App.css';
import ProjectDetails from '../components/ProjectDetails';
import { useEffect, useRef, useState } from 'react';
import getProjects, { getTotalHeight } from '../projects';
import ProgressBar from '../components/ProgressBar';
import Contact from '../components/Contact';
import getArtworks, { getTotalArtworksHeight } from '../artworks';

export default function Home() {
    const [showDetails, setShowDetails] = useState(false)
    const [current, setCurrent] = useState(0)
    const lastScrollY = useRef(null)
    const projects = useRef()
    const artworkManagerHeight = useRef()
  
    projects.current = current === 0 ? getArtworks() : getProjects()
  
    if (current === 0) {
      artworkManagerHeight.current = getTotalArtworksHeight(window.innerHeight)
    } else {
      artworkManagerHeight.current = getTotalHeight(window.innerHeight)
    }
    
    function setShowDetails_(value) {
      if (value !== false) {
        lastScrollY.current = {value: window.scrollY, jumpTo: false}
      }
  
      setShowDetails(value)
    }
  
    function getCurrentProject() {
      return projects.current.filter(p => p.id === showDetails)[0]
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
      <Background current={current} showDetails={showDetails} projects={projects.current} />
        { showDetails ? 
          <ProjectDetails setShowDetails={setShowDetails_} project={getCurrentProject()} /> 
          : 
          <>
            <TopPage current={current} setCurrent={setCurrent} />
            <ArtworkManager current={current} setShowDetails={setShowDetails_} projects={projects.current} artworkManagerHeight={artworkManagerHeight.current} />
            <Contact artworkManagerHeight={artworkManagerHeight.current} />
          </>
        }
        <ProgressBar current={current} showDetails={showDetails} projects={projects.current} />
        <Header current={current} showDetails={showDetails} />
      </>
  }