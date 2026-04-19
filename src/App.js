import './App.css';
import { useEffect } from 'react';
import Lenis from 'lenis';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Bio from './Components/Bio';
import Projects from './Components/Projects';
import CV from './Components/CV';
import Contact from './Components/Contact';
import BackToTop from './Components/BackToTop';

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div>
      <NavBar />
      <section id="home"><Home /></section>
      <section id="bio"><Bio /></section>
      <section id="projects"><Projects /></section>
      <section id="cv"><CV /></section>
      <section id="contact"><Contact /></section>
      <BackToTop />
    </div>
  );
}

export default App;
