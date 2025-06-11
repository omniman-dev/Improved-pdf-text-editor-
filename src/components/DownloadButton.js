import React from "react";

const DownloadButton = ({ onDownload }) => {
  return (
    <button onClick={onDownload} className="download-btn">
      Download Edited PDF
    </button>
  );
};

export default DownloadButton;
