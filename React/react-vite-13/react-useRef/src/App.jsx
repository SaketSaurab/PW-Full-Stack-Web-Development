import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let val = useRef(0);
let btnRef=useRef();
  function handleIncrement() {
    val.current = val.current + 1;
    console.log(`value of val : ${val.current}`);
    setCount(count + 1);
  }

  function changeColour() {
    btnRef.current.style.backgroundColor="red";
  }

  // it runs on every render
  useEffect(() => {
    console.log("Mai phir se render ho gaya hu");
  });

  return (
    <div>
      <button onClick={handleIncrement}
      ref={btnRef}
      >Increment</button>
      <br />
      <br />
      <button onClick={changeColour}>Change colour of first button</button>
      <br />
      <br />
      <div>count:{count}</div>
    </div>
  );
}

export default App;
