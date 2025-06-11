import React, { useRef, useState } from 'react'; import { PDFDocument } from 'pdf-lib'; import { saveAs } from 'file-saver'; import './App.css';

function App() { const fileInputRef = useRef(); const [pdfText, setPdfText] = useState(''); const [pdfDoc, setPdfDoc] = useState(null);

const handleFileUpload = async (event) => { const file = event.target.files[0]; if (file) { const arrayBuffer = await file.arrayBuffer(); const pdf = await PDFDocument.load(arrayBuffer); setPdfDoc(pdf);

const pages = pdf.getPages();
  let textContent = '';

  for (const page of pages) {
    const { text } = await page.getTextContent();
    textContent += text + '\n';
  }

  setPdfText(textContent);
}

};

const handleDownload = async () => { if (!pdfDoc) return;

const page = pdfDoc.getPages()[0];
const { width, height } = page.getSize();
page.drawText(pdfText, {
  x: 50,
  y: height - 100,
  size: 12,
});

const pdfBytes = await pdfDoc.save();
const blob = new Blob([pdfBytes], { type: 'application/pdf' });
saveAs(blob, 'edited.pdf');

};

return ( <div className="app"> <h1>PDF Text Editor</h1> <input type="file" accept="application/pdf" ref={fileInputRef} onChange={handleFileUpload} /> <textarea value={pdfText} onChange={(e) => setPdfText(e.target.value)} placeholder="Edit your PDF text here..." ></textarea> <button onClick={handleDownload}>Download Edited PDF</button> </div> ); }

export default App;

  
