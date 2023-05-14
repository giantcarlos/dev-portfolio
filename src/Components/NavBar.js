import Hamburger from 'hamburger-react';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

function NavBar() {
    const [isOpen, setOpen] = useState(false)
    const [active, setActive] = useState('nav-links')
    const navToggle = () => {
        active === 'nav-links' ? setActive('nav-links-active') : setActive('nav-links');
        console.log(active);
      }
    const navOff = () => {
        setActive('nav-links')
        setOpen(false)
    }

  return (
    <nav>
      <div className="site-title">gtc.<span className="highlight">_</span></div>
      <div className={active} onClick={navOff}>
        <NavLink className="nav-button" to="/">// home</NavLink>
        <NavLink className="nav-button" to="/bio">// bio</NavLink>
        <NavLink className="nav-button" to="/projects">// projects</NavLink>
        <NavLink className="nav-button" to="/cv">// cv</NavLink>
        <NavLink className="nav-button" to="/contact">// contact</NavLink>
      </div>
      <div className="hamburger" onClick={navToggle}>
        <Hamburger toggled={isOpen} toggle={setOpen}/>
      </div>
    </nav>
  )
}

export default NavBar