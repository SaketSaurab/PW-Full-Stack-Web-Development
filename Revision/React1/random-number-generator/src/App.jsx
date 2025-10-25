import { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState("");
  const [len, setLen] = useState("1");
  const [animate, setAnimate] = useState(false);

  const oneDigit = () => {
    const length = parseInt(len);
    const max = 10 ** length;
    setAnimate(false);
    setTimeout(() => {
      setNum(Math.floor(Math.random() * max));
      setAnimate(true);
    }, 10);
  };
  // const twodigit = () => {
  //   setNum(Math.floor(Math.random() * 100));
  // };
  // const threeDigit = () => {
  //   setNum(Math.floor(Math.random() * 1000));
  // };

  return (
    <>
      <div className="container-div">
        <div className="card">
          <h1 className="title"> Random Number Generator</h1>
          <p className="sub-title"> Generate numbers of any length</p>
          <div className={`result-box ${animate ? "pop" : ""}`}>
            {num || "—"}
          </div>
          <label className="label">Number Length</label>
          <input
            type="number"
            value={len}
            onChange={(e) => setLen(e.target.value)}
            placeholder="Lenght of digit to generate"
          />
          <button onClick={oneDigit}>Generate Number</button>
          {/* <button onClick={twodigit}>Two digit number</button>
        <button onClick={threeDigit}>Three Digit number</button> */}
        </div>{" "}
      </div>
    </>
  );
}

export default App;
