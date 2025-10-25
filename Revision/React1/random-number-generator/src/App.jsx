import { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState("");

  const oneDigit = () => {
    setNum(Math.floor(Math.random() * 10));
  };
  const twodigit = () => {
    setNum(Math.floor(Math.random() * 100));
  };
  const threeDigit = () => {
    setNum(Math.floor(Math.random() * 1000));
  };
  return (
    <>
      <div className="container-div">
        <div className="title-div">Random Number Generator</div>
        <div className="result-div">{num}</div>
        <button onClick={oneDigit}>One digit number</button>
        <button onClick={twodigit}>Two digit number</button>
        <button onClick={threeDigit}>Three Digit number</button>
      </div>
    </>
  );
}

export default App;
