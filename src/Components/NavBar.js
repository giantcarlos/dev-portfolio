import React from 'react'
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <div className="site-title">GianTCarlos.</div>
      <NavLink to="/">// home   </NavLink>
      <NavLink to="/about">// about   </NavLink>
      <NavLink to="/projects">// projects   </NavLink>
      <NavLink to="/cv">// cv   </NavLink>
      <NavLink to="/contact">// contact   </NavLink>
    </nav>
  )
}

export default NavBar