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

    window.__lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const target = anchor.getAttribute('href');
      const el = document.querySelector(target);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el);
    };
    document.addEventListener('click', handleAnchorClick);

    return () => {
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="app-shell">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <NavBar />
      <section id="home"><Home /></section>
      <section id="main-content" aria-label="main-content"><Bio /></section>
      <section id="projects"><Projects /></section>
      <section id="cv"><CV /></section>
      <section id="contact"><Contact /></section>
      <BackToTop />
    </div>
  );
}

export default App;
