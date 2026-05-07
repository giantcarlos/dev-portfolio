import React, { useEffect, useState } from 'react'

function Home() {
  const [circleOpacity, setCircleOpacity] = useState(1);
  const [circleTranslate, setCircleTranslate] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const bioSection = document.getElementById('main-content');
      
      if (bioSection) {
        const bioTop = bioSection.getBoundingClientRect().top + window.scrollY;
        const homeHeight = window.innerHeight;
        
        // Fade out circle as bio section approaches and enters view
        const fadeStartY = bioTop - homeHeight * 0.5;
        const fadeEndY = bioTop;
        
        if (scrollY < fadeStartY) {
          setCircleOpacity(1);
        } else if (scrollY > fadeEndY) {
          setCircleOpacity(0);
        } else {
          const fadeProgress = (scrollY - fadeStartY) / (fadeEndY - fadeStartY);
          setCircleOpacity(Math.max(0, 1 - fadeProgress));
        }
      }
      
      // Parallax effect: keep circle position relative to viewport
      setCircleTranslate(scrollY * 0.5);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home">
        <div className="name">
          <span 
            className="home-circle" 
            aria-hidden="true"
            style={{
              opacity: circleOpacity,
              transform: `translateY(calc(3rem + ${circleTranslate}px))`,
            }}
          ></span>
          <h1><span className="home-title-text">GIAN T. CARLOS</span></h1>
        </div>
        <h2>WEB DEVELOPER / UI DESIGNER / ACCESSIBILITY SPECIALIST</h2>
    </div>
  )
}

export default Home