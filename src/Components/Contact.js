import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div>
        <div className='contact-text'>
            <h2>Available for select freelance opportunities.</h2>
            <h2>Shoot me an email with your project idea!</h2><br />
            <h2>email: giantainocarlos@gmail.com</h2>
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