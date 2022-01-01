import TopPage from './components/TopPage';
import Cursor from './components/Cursor';
import ArtworkManager from './components/ArtworkManager';
import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Background from './components/Background';
import './App.css';

function App() {
  gsap.registerPlugin(ScrollTrigger);

  // useEffect(() => {
  //   smoothScroll("#content-scroll")
  // })
  
  return <div>
    {/* <div className="App">
      <div className='scroll-container'> */}
      <Background />
      <div id="viewport">
        <div id="content-scroll" >
        <Cursor />
        <TopPage />
        <ArtworkManager />
        <Header />
      </div>
    </div>
    {/* <Background /> */}
    </div>
}

export default App;
