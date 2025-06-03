import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  let value = useRef(0);
  function handleIncrement() {
    value.current = value.current + 1;
    setCount(count + 1);
    console.log("Value updated to", value);
  }
  function handleDecrement() {
    setCount(count - 1);
  }
  useEffect(() => {
    console.log("mai firse render ho gaya hu");
  });
  return (
    <div>
      <div>Count: {count}</div>
      <div>
        <button onClick={handleIncrement}>Increment</button>
      </div>
      <div>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
