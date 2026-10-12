import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="box">
        <div className="container">
          <div className="container-div timer">
            <h1>{count}</h1>
          </div>
          <div className=" container-div">
            <button className="btn-reset" onClick={() => setCount(0)}>
              Reset
            </button>
          </div>
          <div className=" container-div button">
            <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>
              -
            </button>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
