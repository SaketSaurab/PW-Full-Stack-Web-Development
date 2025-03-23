import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount(count + 1);
  }

  // it runs on every render
  useEffect(() => {
    console.log("Mai phir se render ho gaya hu");
  });

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <br />

      <div>count:{count}</div>
    </div>
  );
}

export default App;
