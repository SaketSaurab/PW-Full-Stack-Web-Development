import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  decrement,
  increment,
  reset,
  incrementByAmount,
} from "./features/counter/counterSlice";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState("");
  function handleIncrementClick() {
    dispatch(increment());
  }
  function handleDecrementClick() {
    dispatch(decrement());
  }
  function handleReset() {
    dispatch(reset());
  }
  function handleIncrementByAmount() {
    dispatch(incrementByAmount(amount));
  }
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <button onClick={handleIncrementClick}>+</button>
      <p>Count: {count}</p>
      <button onClick={handleDecrementClick}>-</button>
      <br />
      <br />
      <button onClick={handleReset}>Reset</button>
      <br /> <br />
      <input
        type="number"
        value={amount}
        placeholder="enter amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <br /> <br />
      <button onClick={handleIncrementByAmount}>incrementByAmount</button>
    </div>
  );
}

export default App;
