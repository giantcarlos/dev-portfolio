import React from 'react';
import ResumePdf from '../gianresume.pdf';

function CV() {
  return (
    <>
      <div className='cv'>
        <img src={'/gianresume.png'} className='cv-image'/>
      </div>
      <a
        className="pdf-button"
        href={ResumePdf}
        download="gianresume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="button2">Download PDF</button>  
      </a>
    </>
  )
}

export default CV