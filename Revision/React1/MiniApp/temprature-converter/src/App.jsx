import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {



  return (
    <>
      <div className="div-container">
        <div className="div-input-output">
          <input placeholder="Enter temprature in Celsius" />
          <span> = Ans</span>
        </div>

        <div className="div-button">
          <button >Reset</button>
          <button>Convert</button>
        </div>
      </div>
    </>
  );
}

export default App;
