import React from "react";
import NavBar from "../NavBar";

export default function Translation({
  doStuff,
  setInput,
  result,
  generateNumberedPDF,
  url,
}) {
  return (
    
    <div>
      <NavBar />
    
      <h1>QuickSheets</h1>
      
      <textarea
        className="text-area"
        cols={55}
        rows={10}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button className="action-btn" onClick={doStuff}>
        Generate Response
      </button>

      {/* button for creating pdf */}
      <button className="action-btn" onClick={generateNumberedPDF}>
        Generate PDF
      </button>
      <h3 className="result-text">{result.length > 0 ? result : ""}</h3>

      <object
        style={{
          width: "100%",
          height: "100vh",
        }}
        data={url}
        type="application/pdf"
      >
        <embed src={url} type="application/pdf" />
      </object>
    </div>
  );
}
