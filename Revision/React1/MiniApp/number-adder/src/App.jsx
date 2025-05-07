import { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleAddition = () => {
    const sum = Number(num1) + Number(num2);
    setResult(sum);
  };
  const handleReset = () => {
    setNum1("");
    setNum2("");
    setResult(null);
  };

  return (
    <>
      <div className="div-container div">
        <div className="div-math">
          <div className="div-input">
            <input
              placeholder="Enter First number"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
            />
          </div>
          <div className="div-input"> + </div>
          <div className="div-input">
            <input
              placeholder="Enter second number"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
            />
          </div>
          <div className="div-input"> = {result} </div>
        </div>

        <div className="div-button">
          <button onClick={handleAddition}>Submit</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
