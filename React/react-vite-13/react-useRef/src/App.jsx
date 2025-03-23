import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
let val=useRef(0);

  function handleIncrement() {
    val.current=val.current+1;
    console.log(`value of val : ${val.current}`);
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
