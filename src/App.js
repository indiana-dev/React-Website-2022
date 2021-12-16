import './App.css';
import { useState } from 'react';
import TopPage from './components/TopPage';
import smoothScroll from './hooks/useSmoothScroll';
import Content from './components/Content';
import Cursor from './components/Cursor';

function App() {
  let [loader, setLoader] = useState(true)

  // useEffect(() => {
  //   smoothScroll("#content-scroll")
  // })

  return (<div>
    {/* <div className="App">
      <div className='scroll-container'> */}
      <div id="viewport">
        <div id="content-scroll">
        {/* <Navbar /> */}
        <Cursor />
        <TopPage />
        <Content />
        <div style={{height: 2000}}></div>
      </div>
      {/* <Loader setLoaderState={setLoader} /> */}
    </div></div>
  );
}

export default App;
