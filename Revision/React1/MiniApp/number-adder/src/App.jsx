import { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const [num3, setNum3] = useState("");
  const [num4, setNum4] = useState("");
  const [result, setResult] = useState("");

  const handleAddition = () => {
    const sum = Number(num1) + Number(num2) + Number(num3) + Number(num4);
    setResult(sum);
  };
  const handleReset = () => {
    setNum1("");
    setNum2("");
    setNum3("");
    setNum4("");
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

          <div className="div-input"> + </div>
          <div className="div-input">
            <input
              placeholder="Enter third number"
              value={num3}
              onChange={(e) => setNum3(e.target.value)}
            />
          </div>

          <div className="div-input"> + </div>
          <div className="div-input">
            <input
              placeholder="Enter fourth number"
              value={num4}
              onChange={(e) => setNum4(e.target.value)}
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
