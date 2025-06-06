import { useCallback, useState } from "react";
import "./App.css";
import ChildComponent from "./components/ChildComponent";

function App() {
  const [count, setCount] = useState(0);
  // function handleClick() {
  //   setCount(count + 1);
  // }

  // const handleClick = () => {
  //   setCount(count + 1);
  // };

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <div>
      <div>
        <h2>Count: {count}</h2>
      </div>
      <div>
        <button onClick={handleClick}>increment</button>
      </div>
      <br />
      <div>
        <ChildComponent handleClick={handleClick} buttonName="Click me" />
      </div>
    </div>
  );
}

export default App;
