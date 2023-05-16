import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div className='container'>
        <div className="card">
            <div className="card-image">
                <img src={'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*lJwrn2GVmSOiMSdHgzoc3A.png'} alt="cover"/>
            </div>
            <div className='text-container'>
              <div className="card-title">Post-Records</div>
              <div className="card-details">Online retail storefront for a fictional record store specializing in rare and out of print post-punk records.</div>
              <div className="card-details">● Developed a JavaScript/React front-end application with a mock JSON API back-end.</div>
              <div className="card-details">● Designed visually appealing layouts, cards, and buttons with custom CSS styling.</div>
              <div className="card-details">● Implemented UI/UX design principles for a seamless customer online retail experience.</div>
            </div>
            <Link to={'https://post-records-client.onrender.com/'} target="_blank">
              <button className="button">Live Link</button>
            </Link>
            <Link to={'https://github.com/giantcarlos/post-records-storefront'} target="_blank">
              <button className="button">Github</button>
            </Link>
            <Link to={'https://www.youtube.com/watch?v=D04XhApmUg8'} target="_blank">
              <button className="button">Demo Video</button>
            </Link>
        </div>
        <div className="card">
            <div className="card-image">
                <img src={'https://miro.medium.com/v2/resize:fit:4800/format:webp/0*YHBpILM5ijSmuekq.png'} alt="cover"/>
            </div>
            <div className='text-container'>
              <div className="card-title">Miniature Tracker</div>
              <div className="card-details">Collection application to assist Dungeons and Dragons/tabletop game managers in managing miniature collections.</div>
              <div className="card-details">● Developed a JavaScript/React front-end and Ruby/Sinatra back-end application.</div>
              <div className="card-details">● Managed front-end state using the useContext hook.</div>
              <div className="card-details">● Implemented client-side validations using React JS.</div>
              <div className="card-details">● Modeled custom database schema and REST API with Active Record and Ruby.</div>
            </div>
            <Link to={'https://github.com/giantcarlos/mini-tracker-client'} target="_blank">
              <button className="button">Github</button>
            </Link>
            <Link to={'https://www.youtube.com/watch?v=6RkCSsI5L7A'} target="_blank">
              <button className="button">Demo Video</button>
            </Link>
        </div>
        <div className="card">
            <div className="card-image">
                <img src={'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*Ad37SFPk3yJxo6bzP6_VgQ.png'} alt="cover"/>
            </div>
            <div className='text-container'>
              <div className="card-title">Scotcher</div>
              <div className="card-details">Journal application for Scotch enthusiasts to track their taste experiences.</div>
              <div className="card-details">● Developed a JavaScript/React/Redux front-end and Ruby/Rails back-end application.</div>
              <div className="card-details">● Utilized Redux Toolkit for asynchronous data retrieval and front-end state management.</div>
              <div className="card-details">● Integrated server-side validations using Rails and Active Record.</div>
              <div className="card-details">● Implemented user authentication, authorization, and password encryption with BCrypt.</div>
            </div>
            <Link to={'https://scotcher.onrender.com/'} target="_blank">
              <button className="button">Live Link</button>
            </Link>
            <Link to={'https://github.com/giantcarlos/scotcher'} target="_blank">
              <button className="button">Github</button>
            </Link>
            <Link to={'https://www.youtube.com/watch?v=uLI89WSmleM'} target="_blank">
              <button className="button">Demo Video</button>
            </Link>
        </div>
    </div>
  )
}

export default Projects