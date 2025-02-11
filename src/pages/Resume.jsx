import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Fix issue with PDF worker path
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-3xl font-bold mb-4">My Resume</h1>
      <div className="border border-gray-300 p-4">
        <Document file="/assets/cherie-davis-resume.pdf">
          <Page pageNumber={1} />
        </Document>
      </div>
    </div>
  );
};

export default Resume;

