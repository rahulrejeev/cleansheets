import React from "react";
import NavBar from '../NavBar';



export default function OptionSelection({ arrayItems, selectOption }) {
  return (
    <>
      <h1>QuickSheets</h1>
      <NavBar/>
      <div className="grid-main">
        {arrayItems.map((item) => {
          return (
            <div
              className="grid-child"
              onClick={() => selectOption(item.option)}
            >
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
