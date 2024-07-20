import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Loader from './components/layouts/Loader';

import Particles from "./components/layouts/Particles";
import Header from "./components/section/Header";
import About from "./components/section/About";
import Works from "./components/section/Works";
import Contact from "./components/section/Contact";
import Thankyou from "./components/section/Thankyou";

import AOS from "aos";
import "aos/dist/aos.css";

import { animation } from "./constants";


function App() {  
  useEffect(() => {
    AOS.init({
      duration: animation.duration,
      once: animation.once,
      disable: !animation.animate,
    });
    // eslint-disable-next-line
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (

    <div className="App">
      {
        <Router>
          <Routes>
            <Route path="/" element={
              <>
                {loading ? <Loader /> : null}
                <Header />
                <Particles />
                <About />
                <Works />
                <Contact setLoading={setLoading}/>
              </>
            } />
            <Route path="/thank-you" element={<> {loading ? <Loader /> : null} <Thankyou /> </>} />
          </Routes>
        </Router>
      }
    </div>
  );
}

export default App;
