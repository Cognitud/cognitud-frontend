'use client'

import React from "react";

const PdfViewer = ({ pdfUrl }) => {
  if (!pdfUrl) {
    return <p>No PDF URL provided</p>;
  }

  return (
    <div className="pdf-viewer">
      <iframe
        src={pdfUrl}
        width="100%"
        height="600px"
        title="PDF Viewer"
      />
    </div>
  );
};

export default PdfViewer;
