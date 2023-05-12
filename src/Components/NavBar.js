import Hamburger from 'hamburger-react';
import React from 'react'
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <div className="site-title">GianTCarlos.<span className="highlight">_</span></div>
      <div className="nav-links">
        <NavLink to="/">// home   </NavLink>
        <NavLink to="/bio">// bio   </NavLink>
        <NavLink to="/projects">// projects   </NavLink>
        <NavLink to="/cv">// cv   </NavLink>
        <NavLink to="/contact">// contact   </NavLink>
      </div>
      <div className="hamburger" >
        <Hamburger/>
      </div>
    </nav>
  )
}

export default NavBar