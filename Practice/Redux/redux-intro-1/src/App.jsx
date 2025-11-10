import { useState } from "react";
import "./App.css";
import Navbar, { HelloBro } from "./components/Navbar";
function App() {
  const [count, setCount] = useState(0);
  const handlePlus = () => {
    setCount(count + 1);
  };
  const handleMinus = () => {
    setCount(count > 0 ? count - 1 : 0);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div>
      <div>Hello count: {count}</div>
      <button onClick={handleMinus}>-</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handlePlus}>+</button>
      <HelloBro count1={count} />
    </div>
  );
}

export default App;
