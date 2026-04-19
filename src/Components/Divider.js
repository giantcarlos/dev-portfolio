import React, { useEffect, useRef, useState } from 'react';

function Divider() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0, rootMargin: '0px 0px -80px 0px' }
    );
    // rAF ensures opacity:0 is painted before we start observing
    const raf = requestAnimationFrame(() => {
      if (ref.current) observer.observe(ref.current);
    });
    return () => { cancelAnimationFrame(raf); observer.disconnect(); };
  }, []);

  return (
    <div
      ref={ref}
      className="divider"
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.8s ease',
      }}
    />
  );
}

export default Divider;
