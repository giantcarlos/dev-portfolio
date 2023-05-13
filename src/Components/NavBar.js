import Hamburger from 'hamburger-react';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

function NavBar() {
    const [active, setActive] = useState('nav-links')
    const navToggle = () => {
        active === 'nav-links' ? setActive('nav-links-active') : setActive('nav-links');
      }

  return (
    <nav>
      <div className="site-title">gtc.<span className="highlight">_</span></div>
      <div className={active}>
        <NavLink to="/">// home   </NavLink>
        <NavLink to="/bio">// bio   </NavLink>
        <NavLink to="/projects">// projects   </NavLink>
        <NavLink to="/cv">// cv   </NavLink>
        <NavLink to="/contact">// contact   </NavLink>
      </div>
      <div className="hamburger" >
        <Hamburger onClick={navToggle}/>
      </div>
    </nav>
  )
}

export default NavBar