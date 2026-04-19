import Hamburger from 'hamburger-react';
import React, { useState } from 'react';

function NavBar() {
    const [isOpen, setOpen] = useState(false)
    const [active, setActive] = useState('nav-links')
    const navToggle = () => {
        active === 'nav-links' ? setActive('nav-links-active') : setActive('nav-links');
    }
    const navOff = () => {
        setActive('nav-links')
        setOpen(false)
    }

  return (
    <nav>
      <div className="site-title">gtc.<span className="highlight">_</span></div>
      <div className={active} onClick={navOff}>
        <a className="nav-button" href="#home">// home</a>
        <a className="nav-button" href="#main-content">// bio</a>
        <a className="nav-button" href="#projects">// projects</a>
        <a className="nav-button" href="#cv">// cv</a>
        <a className="nav-button" href="#contact">// contact</a>
      </div>
      <div className="hamburger" onClick={navToggle}>
        <Hamburger toggled={isOpen} toggle={setOpen}/>
      </div>
    </nav>
  )
}

export default NavBar