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
        <a className="nav-button" href="#home"><span className="nav-prefix">//</span><span className="nav-label">home</span></a>
        <a className="nav-button" href="#main-content"><span className="nav-prefix">//</span><span className="nav-label">bio</span></a>
        <a className="nav-button" href="#projects"><span className="nav-prefix">//</span><span className="nav-label">projects</span></a>
        <a className="nav-button" href="#cv"><span className="nav-prefix">//</span><span className="nav-label">cv</span></a>
        <a className="nav-button" href="#contact"><span className="nav-prefix">//</span><span className="nav-label">contact</span></a>
      </div>
      <div className="hamburger" onClick={navToggle}>
        <Hamburger toggled={isOpen} toggle={setOpen}/>
      </div>
    </nav>
  )
}

export default NavBar