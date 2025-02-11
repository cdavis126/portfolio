import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "bootstrap/dist/css/bootstrap.min.css";

// Fix issue with PDF worker path
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100 bg-dark text-white">
      <h1 className="mb-4">My Resume</h1>
      <div className="border p-3 bg-light text-dark rounded shadow-lg">
        <Document file="/assets/cherie-davis-resume.pdf">
          <Page pageNumber={1} />
        </Document>
      </div>
    </div>
  );
};

export default Resume;


