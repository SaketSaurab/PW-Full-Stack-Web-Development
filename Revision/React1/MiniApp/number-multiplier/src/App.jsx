import { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);
  const handleMultiply = () => {
    const ans = Number(num1) * Number(num2);
    setResult(ans);
  };
  const handleReset = () => {
    setNum1("");
    setNum2("");
    setResult(null);
  };
  return (
    <>
      <div className="div-container">
        <div className="div-input">
             <input
          placeholder="First Number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          placeholder="Second Number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
       <h3> = {result}</h3>
        </div>

     

        <div className="div-button">
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleMultiply}>Calculate</button>
        </div>
      </div>
    </>
  );
}

export default App;
