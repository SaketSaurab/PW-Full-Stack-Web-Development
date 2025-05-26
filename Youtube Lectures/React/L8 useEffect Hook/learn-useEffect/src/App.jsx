import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [total, setTotal] = useState(1);
  function handleClick() {
    setCount(count + 1);
  }

  function handleTotalClick() {
    setTotal(total + 1);
  }

  // *first =>side effect function
  // *secont=>cleanup fucntion
  // * third => comma seprated dependancy list

  // variation 1 : runs on every render

  // useEffect(() => {
  //   // *first
  //   console.log("I will run on each render");
  // });

  // variation 2 : run only on first render

  // useEffect(() => {
  //   console.log("I will run on first render only");
  // }, []);

  // variation 3: runs on

  // useEffect(() => {
  //   console.log("I will run when count is updated");
  // }, [count]);

  // variation 4: mutliple dependencies

  useEffect(() => {
    console.log("count/total is updated");
  }, [count, total]);

  //

  return (
    <div>
      <h1>Count: {count}</h1>
      <br />
      <button onClick={handleClick}>Click me</button>

      <br />
      <br />
      <h1>total: {total}</h1>
      <br />
      <button onClick={handleTotalClick}>Click me</button>
    </div>
  );
}

export default App;
