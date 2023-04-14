import "./App.css";
import { Configuration, OpenAIApi } from "openai";
import OptionSelection from "./components/OptionSelection";
import Translation from "./components/Translation";
import { arrayItems } from "./AIOptions";
import { useState } from "react";
import pdfMake from "pdfmake/build/pdfmake";
import vfs from "../fonts/vfs_fonts";


pdfMake.vfs = vfs;

pdfMake.fonts = {
  NimbusSans: {
    normal: "NimbusSanL-Reg.otf",
    bold: "NimbusSanL-Bol.otf",
    italics: "NimbusSanL-RegIta.otf",
    bolditalics: "NimbusSanL-BolIta.otf",
  },
};

const docDefinition = {
  content: [
    "First paragraph",
    "Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines",
  ],
  defaultStyle: {
    font: "NimbusSans",
  },
};
// import { pdfMake } from "pdfmake";
// import { pdfFonts } from "pdfmake"

// const pdfMake = require('pdfmake/build/pdfmake');
// const pdfFonts = require('pdfmake/build/vfs_fonts');

const APPIIKEYY = "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";

function App() {
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);
  const [option, setOption] = useState({});
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");
  const [textResponse, setTextResponse] = useState("");
  const [renderedText, setRenderedText] = useState("");

  const [url, setUrl] = useState(null);
  const [fullyRendered, setFullyRendered] = useState([]);

  const docDefinition = {
    // content: [
    //   "First paragraph",
    //   "Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines",
    // ],
    content: fullyRendered,

    defaultStyle: {
      font: "NimbusSans",
    },
  };

  const create = () => {
    console.log("generating");
    const pdfDocGenerator = pdfMake.createPdf(docDefinition);
    pdfDocGenerator.getBlob((blob) => {
      const url = URL.createObjectURL(blob);
      setUrl(url);
      console.log(url);
    });
  };

  const selectOption = (option) => {
    setOption(option);
  };

  // pdfMake.vfs = pdfFonts.pdfMake.vfs;

  // function generateNumberedPDF(textResponse) {
  //   const lines = textResponse.split('\n');
  //   const content = [];

  //   // Add each line with its corresponding number to the PDF document
  //   for (let i = 0; i < lines.length; i++) {
  //     content.push({ text: `${i + 1}. ${lines[i]}` });
  //   }

  //   // Create the PDF document definition
  //   const docDefinition = {
  //     content: content
  //   };

  //   // Generate the PDF document
  //   pdfMake.createPdf(docDefinition).download('numbered.pdf');
  // }

  const fixString = (gptResponse) => {
    for (let i = 0; i < gptResponse.length; i++) {
      let char = text.charAt(i);
      if (char === "/") {
        console.log(char);
      }
    }
  };

  const fixString2 = (gptResponse) => {
    console.log("wagwan GGG");
    const arr1 = gptResponse.split("\n");
    for (let i = 0; i < arr1.length; i++) {
      console.log(arr1[i]);
    }
    console.log(arr1);

    var arr2 = [];
    var arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i].startsWith("Answer:")) {
        arr2.push(arr1[i]);
        arr3.push(i);
      }
    }

    // for (let i = arr1.length; i > -1; i--) {
    //   if (arr1[i] != undefined) {
    //     if (arr1[i].startsWith("Answer:")) {
    //       let mhm = arr1.pop(i);
    //       arr2.push(mhm);
    //     }
    //   }
    // }
    console.log(arr1);

    console.log(arr2);
    setFullyRendered(arr1);
  };

  const generateNumberedPDF = () => {
    console.log("heyy");
  };

  const doStuff = async () => {
    let object = { ...option, prompt: input };

    const response = await openai.createCompletion(object);

    console.log(JSON.stringify(response.data.choices[0]));
    console.log(JSON.stringify(response.data.choices[0].text));
    setTextResponse(response.data.choices[0].text);
    console.log(textResponse);
    fixString2(textResponse);

    setResult(response.data.choices[0].text);
  };

  return (

    <div className="App">
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
      ) : (
        <Translation
          doStuff={doStuff}
          setInput={setInput}
          result={result}
          textResponse={textResponse}
          generateNumberedPDF={create}
          fixString2={fixString2}
          url={url}
        />
      )}
    </div>
  );
}

export default App;
