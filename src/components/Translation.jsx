import React, { useState } from "react";
import NavBar from "../NavBar";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

export default function Translation({
  doStuff,
  setInput,
  result,
  generateNumberedPDF,
  url,
  setAPI,
  api,
}) {
  var changedResult = result.replaceAll("$", "");

  return (
    <div>
      <NavBar />

      <h1>QuickSheets</h1>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <h4 style={{ marginRight: "102px" }}>Insert API in textbox</h4>
          <textarea
            className="text-area2"
            cols={69}
            rows={1}
            onChange={(e) => setAPI(e.target.value)}
          ></textarea>
          <button className="action-btn" onClick={console.log(api)}>
            set API value
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <h4 style={{ marginRight: "50px" }}>Insert Prompt For Question</h4>

          <textarea
            className="text-area"
            cols={55}
            rows={10}
            onChange={(e) => setInput(e.target.value)}
            placeholder="eg: create 5 multiple choice questions with answers on the civil
            war"
          ></textarea>
        </div>
      </div>

      <h5 style={{ marginRight: "102px" }}>
        *sidenote: after generate responce is clicked once and has generated,
        click generate response again and wait 5 secs before clicking "generate
        pdf"
      </h5>

      <button className="action-btn" onClick={doStuff}>
        Generate Response
      </button>

      {/* button for creating pdf */}
      <button className="action-btn" onClick={generateNumberedPDF}>
        Generate PDF
      </button>
      <h1 className="result-text">{result.length > 0 ? result : ""}</h1>
      <BlockMath math={result.length > 0 ? result : ""} />
      <BlockMath math={changedResult.length > 0 ? changedResult : ""} />

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
