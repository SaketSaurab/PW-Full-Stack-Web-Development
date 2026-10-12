import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [totoalClick, setTotalClick] = useState(0);
  const handlePlus = () => {
    setCount(count + 1);
    setTotalClick(totoalClick + 1);
  };
  const handleMinus = () => {
    setCount(count > 0 ? count - 1 : 0);

    setTotalClick(totoalClick + 1);
  };
  const handleReset = () => {
    setCount(0);

    setTotalClick(totoalClick + 1);
  };
  return (
    <div className="container">
      <div>{count}</div>

      <div>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleMinus}>-</button>
        <button onClick={handlePlus}> +</button>
        <h2>Total numbers clicks : {totoalClick}</h2>
      </div>
    </div>
  );
}

export default App;
