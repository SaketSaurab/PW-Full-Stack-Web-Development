import { useEffect, useState } from "react";

import "./App.css";

function App() {
  // *first =>side effect function
  // *secont=>cleanup fucntion
  // * third => comma seprated dependancy list

  // variation 1 : runs on every render

  // useEffect(() => {
  //   // *first
  //   console.log("I will run on each render");
  // });

  // variation 2 : run only on first render

  useEffect(() => {
    console.log("I will run on first render only");
  }, [3]);
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <br />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
