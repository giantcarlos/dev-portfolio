import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Divider from './Divider';

function useReveal(delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add('reveal-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return ref;
}

function Contact() {
  const currentYear = new Date().getFullYear();
  const contactRef = useReveal(0);
  const iconsRef = useReveal(400);
  const copyrightRef = useReveal(600);

  return (
    <>
      <Divider />
      <div className='contact-section'>
        <div ref={contactRef} className='contact-text reveal'>
          <h3>Available for freelance web development and accessibility audit work.</h3>
          <h3>Shoot me an email with your project idea!</h3>
          <h3>email: <a href="mailto:giantainocarlos@gmail.com" className="email-link">giantainocarlos@gmail.com</a></h3>
        </div>
        <div className='contact-footer'>
          <div ref={iconsRef} className='icons reveal'>
            <Link to={'https://www.linkedin.com/in/gian-taino-carlos/'} target="_blank">
              <img className="logo linkedin-logo" src="https://api.iconify.design/mdi/linkedin.svg?color=%23faf9f6" alt="LinkedIn icon."/>
            </Link>
            <Link to={'https://github.com/giantcarlos'} target="_blank">
              <img className="logo2 github-logo" src="https://cdn.simpleicons.org/github/FAF9F6" alt="GitHub icon."/>
            </Link>
            <Link to={'https://www.instagram.com/vestments/'} target="_blank">
              <img className="logo" src="https://cdn.simpleicons.org/instagram/FAF9F6" alt="Instagram icon."/>
            </Link>
          </div>
          <p ref={copyrightRef} className='contact-copyright reveal'>
            © {currentYear} Copyright Gian Taino Carlos.
          </p>
        </div>
      </div>
    </>
  )
}

export default Contact