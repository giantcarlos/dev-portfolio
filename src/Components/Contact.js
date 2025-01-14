import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div>
        <div className='contact-text'>
            <h3>Available for web development and accessibility audit work.</h3>
            <h3>Shoot me an email with your project idea!</h3><br />
            <h3>email: giantainocarlos@gmail.com</h3>
        </div>
        <div className='icons'>
            <Link to={'https://www.linkedin.com/in/gian-taino-carlos/'} target="_blank">
                <img className="logo" src={'/linkedinicon.png'} alt="LinkedIn icon."/>
            </Link>
            <Link to={'https://github.com/giantcarlos'} target="_blank">
                <img className="logo2" src={'githubicon.png'} alt="Github icon."/>  
            </Link>
            <Link to={'https://www.instagram.com/vestments/'} target="_blank">
                <img className="logo" src={'instagramicon.png'} alt="Instagram icon."/>
            </Link>
        </div>
    </div>
  )
}

export default Contact