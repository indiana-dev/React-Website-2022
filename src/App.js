import Cursor from './components/Cursor';
import gsap, { ScrollToPlugin } from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './App.scss';
import Home from './Home';
import useMobileDetect from 'use-mobile-detect-hook';

function App() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  const isMobile = useMobileDetect().isMobile()

  return <div>
      <div id="viewport">
          {isMobile ? null : <Cursor />}
          <Home />
      </div>
    </div>
}

export default App;