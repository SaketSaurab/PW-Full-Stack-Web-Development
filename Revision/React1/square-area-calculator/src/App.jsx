import { useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState("");
  const [breadth, setBreadth] = useState("");
  const [area, setArea] = useState(null);
  const [perimeter, setPerimeter] = useState(null);

  const handleCalculate = () => {
    const l = parseFloat(length);
    const b = parseFloat(breadth);

    if (isNaN(l) || isNaN(b) || l <= 0 || b <= 0) {
      alert("Enter valid positive number");
      setLength("");
      setBreadth("");
      return;
    }
    setArea(l * b);
    setPerimeter(2 * (l + b));
  };
  const handleReset = () => {
    setLength("");
    setBreadth("");
    setArea(null);
    setPerimeter(null);
  };
  return (
    <>
      <div className="container">
        <div className="content">
          <h2> Calculate area and perimeter</h2>

          <input
            type="number"
            className="input-filed"
            value={length}
            placeholder="Enter the length "
            onChange={(e) => setLength(e.target.value)}
          />

          <input
            type="number"
            className="input-filed"
            value={breadth}
            placeholder="Enter the width "
            onChange={(e) => setBreadth(e.target.value)}
          />
          <button className="button" onClick={handleCalculate}>
            Calculate
          </button>
          <button onClick={handleReset}>Reset</button>
          {area != null && perimeter != null && (
            <div className="result-box">
              <p>Area : {area}</p>
              <p>Perimeter : {perimeter}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
