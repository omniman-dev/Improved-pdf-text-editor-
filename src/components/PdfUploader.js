import React from "react";

const PdfUploader = ({ onFileChange }) => {
  return (
    <div className="upload-box">
      <input
        type="file"
        accept="application/pdf"
        onChange={onFileChange}
        className="file-input"
      />
    </div>
  );
};

export default PdfUploader;
