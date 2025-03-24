import { useState } from "react";
import "./App.css";
import { useRef } from "react";

function App() {
  const [time, setTime] = useState(0);
  let timeRef = useRef(null);
  function startTimer() {
    timeRef.current = setInterval(() => {
      setTime(time=>time + 1);
    }, 1000);
  }
  function stopTimer() {
    clearInterval(timeRef.current);
    timeRef.current = null;
  }
  function resetTimer() {
    stopTimer();
    setTime(0);
  }

  return (
    <div>
      <h1>Stop Watch : {time} seconds</h1>
      <button onClick={startTimer}>Start Timer</button>
      <br />
      <br />
      <button onClick={stopTimer}>Stop Timer</button>
      <br />
      <br />
      <button onClick={resetTimer}>Reset Timer</button>
    </div>
  );
}

export default App;
