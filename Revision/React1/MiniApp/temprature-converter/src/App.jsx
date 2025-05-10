import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [temp, setTemp] = useState("");
  const [result, setResult] = useState(null);

  const calculateTemp = () => {
if(temp===''|| isNaN(temp)){
  setResult("Please enter valid number");
  return;
}

    let ans = (Number(temp * 9) / 5 + 32);

    setResult(ans.toFixed(2));
  };

  const handleReset=()=>{
    setTemp("");
    setResult(null);
  }

  return (
    <>
      <div className="div-container">
        <div className="div-input-output">
          <input
            placeholder="Enter temprature in Celsius"
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
          />
          <span> = {result}</span>
        </div>

        <div className="div-button">
          <button onClick={handleReset}>Reset</button>
          <button onClick={calculateTemp}>Convert</button>
        </div>
      </div>
    </>
  );
}

export default App;
