import React from 'react'
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <div className="site-title">GianTCarlos.<span className="highlight">_</span></div>
      <NavLink to="/">// home   </NavLink>
      <NavLink to="/bio">// bio   </NavLink>
      <NavLink to="/projects">// projects   </NavLink>
      <NavLink to="/cv">// cv   </NavLink>
      <NavLink to="/contact">// contact   </NavLink>
      <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
      </div>
    </nav>
  )
}

export default NavBar