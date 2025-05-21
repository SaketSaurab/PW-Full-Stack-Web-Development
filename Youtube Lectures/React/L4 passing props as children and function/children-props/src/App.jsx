import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Button from "./components/button";

function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h2>Button </h2>
      <Button text="Click me" handleClick={handleClick}>
        <h1>{count}</h1>
      </Button>
      <h2>card</h2>
      <Card>
        <h3>I am inside button card</h3>
      </Card>
    </div>
  );
}

export default App;
