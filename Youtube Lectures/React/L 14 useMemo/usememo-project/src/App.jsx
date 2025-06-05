import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);
  function expernsiveTask(num) {
    console.log("Inside expensive task");
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  }
  let doubleValue = useMemo(() => expernsiveTask(input), [input]);
  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Expensive task:{doubleValue}</h2>
      <button onClick={() => setCount(count + 1)}> Increment</button>
      <br />
      <br />
      <input
        type="number"
        placeholder="Enter number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

export default App;
