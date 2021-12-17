import './App.css';
import TopPage from './components/TopPage';
import Cursor from './components/Cursor';
import ProjectManager from './components/ProjectManager';
import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Header from './components/Header';

function App() {

    gsap.registerPlugin(ScrollTrigger);

  // useEffect(() => {
  //   smoothScroll("#content-scroll")
  // })

  return <div>
    {/* <div className="App">
      <div className='scroll-container'> */}
      <div id="viewport">
        <div id="content-scroll">
        <Cursor />
        <TopPage />
        <ProjectManager />
        <Header />
      </div>
    </div>
    </div>
}

export default App;
