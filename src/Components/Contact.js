import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div>
        <div className='contact-text'>
            <p>Available for select freelance opportunities.</p>
            <p>Shoot me your project idea!</p><br />
            <p>email: giantainocarlos@gmail.com</p>
        </div>
        <div className='icons'>
            <Link to={'https://www.linkedin.com/in/gian-taino-carlos/'} target="_blank">
                <img className="logo" src={'/linkedinicon.png'} alt="Not found."/>
            </Link>
            <Link to={'https://github.com/giantcarlos'} target="_blank">
                <img className="logo2" src={'githubicon.png'} alt="Not found."/>  
            </Link>
            <Link to={'https://www.instagram.com/vestments/'} target="_blank">
                <img className="logo" src={'instagramicon.png'} alt="Not found."/>
            </Link>
        </div>
    </div>
  )
}

export default Contact