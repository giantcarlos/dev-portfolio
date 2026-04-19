import React from 'react'
import { Fade } from 'react-reveal';
import Divider from './Divider';

function Bio() {
  return (
    <>
      <Divider />
      <Fade>
      <div className="bio">
        <img className="me" src="bolo.jpg" alt="headshot photo of Gian Carlos" />
        <p>Manila-born, Texas-based front-end web developer specializing in UI design and web accessibility. Skilled in JavaScript, React, Redux, HTML, and CSS, with a strong commitment to delivering intuitive and inclusive user experiences. Fully up to date with WCAG 2.2 standards, ensuring accessibility is prioritized in every project.</p>
        <p>Beyond the world of code, I am a former touring musician turned local Dallas DJ. A dedicated long-distance runner with four Dallas Marathon finishes, currently gearing up for the fifth. During downtime, I indulge in Dungeons & Dragons and Magic: The Gathering, as I value the creativity and social connections these games foster.</p>
      </div>
      <div className="skills">
        <Fade delay={100}>
          <div className="skill-column">
            <h4>Design</h4>
            <ul>
              <li>Adobe Photoshop</li>
              <li>Adobe InDesign</li>
              <li>Adobe Illustrator</li>
              <li>Figma</li>
            </ul>
          </div>
        </Fade>
        <Fade delay={300}>
          <div className="skill-column">
            <h4>Development</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Redux</li>
              <li>Tailwind</li>
              <li>Framer Motion</li>
              <li>Node.js</li>
              <li>Git</li>
            </ul>
          </div>
        </Fade>
        <Fade delay={500}>
          <div className="skill-column">
            <h4>Accessibility</h4>
            <ul>
              <li>WCAG 2.2</li>
              <li>WAVE</li>
              <li>Lighthouse</li>
              <li>Axe</li>
              <li>VoiceOver</li>
            </ul>
          </div>
        </Fade>
      </div>
      </Fade>
    </>
  )
}

export default Bio;