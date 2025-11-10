import "./App.css";
import Navbar, { HelloBro } from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  multiply,
  reset,
} from "./redux/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Hello count: {count}</h2>

      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(multiply())}>×2</button>
      <Navbar />
    </div>
  );
}

export default App;
