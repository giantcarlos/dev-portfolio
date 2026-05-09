import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Divider from './Divider';

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('reveal-visible'); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Projects() {
  const card1 = useReveal();
  const card2 = useReveal();
  const card3 = useReveal();
  const card4 = useReveal();

  return (
    <div className='container'>
      <Divider />
        <div ref={card1} className="card reveal">
            <div className="card-image">
                <img src={'https://i.imgur.com/zzX037x.png'} alt="Dentonpalooza site."/>
            </div>
            <div className='text-container'>
              <div className="card-title">Dentonpalooza</div>
              <div className="card-details">Yearly freelance web development project for the non-profit festival, Dentonpalooza.</div>
              <div className="card-details bullet-detail">● Utilized React and Framer Motion to build an engaging, informational website.</div>
              <div className="card-details bullet-detail">● Translated artistic direction into UI/UX, while incorporating sponsor identities.</div>
              <div className="card-details bullet-detail">● Acquired firsthand exposure to professional and non-profit development dynamics.</div>
              <div className="card-details bullet-detail">● Incorporated accessibility design tailored to users with visual impairments.</div>
            </div>
            <div className="button-group">
            <Link to={'https://giantcarlos.github.io/dentonpalooza25/'} target="_blank">
              <button className="button">2025 Link</button>
            </Link>
            <Link to={'https://giantcarlos.github.io/dentonpalooza24/'} target="_blank">
              <button className="button">2024 Link</button>
            </Link>
            <Link to={'https://giantcarlos.github.io/dentonpalooza23/'} target="_blank">
              <button className="button">2023 Link</button>
            </Link>
            <Link to={'https://dentonpalooza.com/'} target="_blank">
              <button className="button">Live Link</button>
            </Link>
            <Link to={'https://github.com/giantcarlos/dentonpalooza25'} target="_blank">
              <button className="button">Github</button>
            </Link>
            </div>
        </div>
        <div ref={card2} className="card reveal">
            <div className="card-image">
                <img src={'https://miro.medium.com/v2/resize:fit:4800/format:webp/0*YHBpILM5ijSmuekq.png'} alt="Miniature Tracker minis collection page."/>
            </div>
            <div className='text-container'>
              <div className="card-title">Miniature Tracker</div>
              <div className="card-details">Collection application to assist D&D/tabletop dungeon masters in managing miniature collections.</div>
              <div className="card-details bullet-detail">● Developed a JavaScript/React front-end and Ruby/Sinatra back-end application.</div>
              <div className="card-details bullet-detail">● Managed front-end state using the useContext hook.</div>
              <div className="card-details bullet-detail">● Implemented client-side validations using React JS.</div>
              <div className="card-details bullet-detail">● Modeled custom database schema and REST API with Active Record and Ruby.</div>
            </div>
            <div className="button-group">
            <Link to={'https://www.youtube.com/watch?v=6RkCSsI5L7A'} target="_blank">
              <button className="button">Demo Video</button>
            </Link>
            <Link to={'https://github.com/giantcarlos/mini-tracker-client'} target="_blank">
              <button className="button">Github</button>
            </Link>
            </div>
        </div>
        <div ref={card3} className="card reveal">
            <div className="card-image">
                <img src={'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*Ad37SFPk3yJxo6bzP6_VgQ.png'} alt="Scotcher home page."/>
            </div>
            <div className='text-container'>
              <div className="card-title">Scotcher</div>
              <div className="card-details">Journal application for Scotch enthusiasts to track their taste experiences.</div>
              <div className="card-details bullet-detail">● Developed a JavaScript/React/Redux front-end and Ruby/Rails back-end application.</div>
              <div className="card-details bullet-detail">● Integrated server-side validations using Rails and Active Record.</div>
              <div className="card-details bullet-detail">● Implemented user authentication, authorization, and password encryption with BCrypt.</div>
              <div className="card-details bullet-detail">● Utilized Redux Toolkit for asynchronous data retrieval and front-end state management.</div>
            </div>
            <div className="button-group">
            <Link to={'https://www.youtube.com/watch?v=uLI89WSmleM'} target="_blank">
              <button className="button">Demo Video</button>
            </Link>
            <Link to={'https://github.com/giantcarlos/scotcher'} target="_blank">
              <button className="button">Github</button>
            </Link>
            </div>
        </div>
        <div ref={card4} className="card reveal">
            <div className="card-image">
                <img src={'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*lJwrn2GVmSOiMSdHgzoc3A.png'} alt="cover"/>
            </div>
            <div className='text-container'>
              <div className="card-title">Post-Records</div>
              <div className="card-details">Online retail storefront for a specialty record store dealing with rare and out of print post-punk records.</div>
              <div className="card-details bullet-detail">● Developed a JavaScript/React front-end application with a mock JSON API back-end.</div>
              <div className="card-details bullet-detail">● Designed visually appealing layouts, cards, and buttons with custom CSS styling.</div>
              <div className="card-details bullet-detail">● Implemented UI/UX design principles for a seamless customer online retail experience.</div>
            </div>
            <div className="button-group">
            <Link to={'https://www.youtube.com/watch?v=D04XhApmUg8'} target="_blank">
              <button className="button">Demo Video</button>
            </Link>
            <Link to={'https://github.com/giantcarlos/post-records-storefront'} target="_blank">
              <button className="button">Github</button>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default Projects