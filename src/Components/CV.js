import React from 'react';
import { Fade } from 'react-reveal';
import ResumePdf from '../gianresume.pdf';
import Divider from './Divider';

function CV() {
  return (
    <>
      <Divider />
      <Fade>
      <div className='cv'>
        <a
          className="pdf-button"
          href={ResumePdf}
          download="gianresume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button2">Download PDF</button>  
        </a>
        <img src={'/gianresume.jpeg'} className='cv-image' alt='My resume/curriculum vitae.'/>
      </div>
      </Fade>
    </>
  )
}

export default CV