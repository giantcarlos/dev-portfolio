import React, { useEffect, useRef } from 'react'

function Home() {
  const circleRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;
    if (!circle) return;

    let latestScrollY = window.scrollY;
    let animationFrameId;

    const animateCircle = (time) => {
      const floatOffset = Math.sin(time * 0.0020) * 7;
      circle.style.transform = `translateY(calc(3rem + ${latestScrollY * 0.5 + floatOffset}px))`;
      animationFrameId = requestAnimationFrame(animateCircle);
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      latestScrollY = scrollY;
      const bioSection = document.getElementById('main-content');

      if (bioSection) {
        const bioTop = bioSection.getBoundingClientRect().top + scrollY;
        const homeHeight = window.innerHeight;
        const fadeStartY = bioTop - homeHeight * 0.5;
        const fadeEndY = bioTop;

        let opacity;
        if (scrollY < fadeStartY) {
          opacity = 1;
        } else if (scrollY > fadeEndY) {
          opacity = 0;
        } else {
          opacity = Math.max(0, 1 - (scrollY - fadeStartY) / (fadeEndY - fadeStartY));
        }

        circle.style.opacity = opacity;
      }
    };

    handleScroll();
    animationFrameId = requestAnimationFrame(animateCircle);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home">
        <div className="name">
          <span
            ref={circleRef}
            className="home-circle"
            aria-hidden="true"
          ></span>
          <h1><span className="home-title-text">GIAN T. CARLOS</span></h1>
        </div>
        <h2>WEB DEVELOPER / UI DESIGNER / ACCESSIBILITY SPECIALIST</h2>
    </div>
  )
}

export default Home