import { useState } from "react";
import "./app.css";

function App() {
  const [value, setValue] = useState("");
  const handleClick = (val) => {
    setValue(value + val);
  };

  const clearScreen = () => {
    setValue("");
  };

  const calculate = () => {
    setValue(eval(value));
  };

  return (
    <>
      <div className="container-div">
        <div className="title div-line">Calculator</div>
        <div className="row-one div-line">
          <input type="text" value={value} readOnly />
        </div>

        <div className="row-two div-line">
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("/")}>/</button>
        </div>

        <div className="row-three div-line">
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("*")}>*</button>
        </div>

        <div className="row-four div-line">
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("-")}>-</button>
        </div>

        <div className="row-five div-line">
          <button onClick={clearScreen}>C</button>
          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </>
  );
}

export default App;
