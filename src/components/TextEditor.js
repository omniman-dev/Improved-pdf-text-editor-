import React from "react";

const TextEditor = ({ text, onChange }) => {
  return (
    <div className="editor-box">
      <textarea
        value={text}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Edit PDF text here..."
      />
    </div>
  );
};

export default TextEditor;
