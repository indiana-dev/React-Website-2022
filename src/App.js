import Cursor from './components/Cursor';
import gsap, { ScrollToPlugin } from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './App.css';
import Home from './Home';

function App() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  return <div>
      <div id="viewport">
          <Cursor />
          <Home />
      </div>
    </div>
}

export default App;