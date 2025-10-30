import { useState } from "react";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("white");

  return (
    <>
      <div className={`container-div ${bgColor}`}>
        <div className="colors-div">
          <button onClick={() => setBgColor("red")}>Red</button>
          <button onClick={() => setBgColor("green")}>Green</button>
          <button onClick={() => setBgColor("yellow")}>Yellow</button>
          <button onClick={() => setBgColor("blue")}>Blue</button>
          <button onClick={() => setBgColor("pink")}>Pink</button>
          <button onClick={() => setBgColor("purple")}>Purple</button>
          <button onClick={() => setBgColor("beige")}>beige</button>
          <button onClick={() => setBgColor("black")}>black</button>
          <button onClick={() => setBgColor("white")}>white</button>
        </div>
      </div>
    </>
  );
}

export default App;
