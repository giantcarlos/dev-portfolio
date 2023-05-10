import React from 'react'
import { Document, Page, pdfjs } from 'react-pdf';

function CV() {
    const resumeUrl = '/gianresume.pdf';
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  return (
    <div className='cv'>
      <Document file={resumeUrl}>
        <Page pageNumber={1} />
      </Document>
    </div>
  )
}

export default CV