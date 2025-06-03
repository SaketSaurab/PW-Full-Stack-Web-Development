import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  let value = useRef(0);
  let btnRef = useRef();
  function handleIncrement() {
    value.current = value.current + 1;
    setCount(count + 1);
    console.log("Value updated to", value.current);
  }
  function handleDecrement() {
    setCount(count - 1);
  }
  function handleColourChange() {
    btnRef.current.style.backgroundColor = "red";
  }
  useEffect(() => {
    console.log("mai firse render ho gaya hu");
  });
  return (
    <div>
      <div>Count: {count}</div>
      <div>
        <button ref={btnRef} onClick={handleIncrement}>
          Increment
        </button>
      </div>
      <div>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <div>
        <button onClick={handleColourChange}>Change colour of button</button>
      </div>
    </div>
  );
}

export default App;
