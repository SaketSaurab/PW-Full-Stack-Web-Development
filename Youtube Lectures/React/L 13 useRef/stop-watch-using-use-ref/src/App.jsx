import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);

  let timerRef = useRef(null);
  function startTimer() {
    timerRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  }
  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }
  function resetTimer() {
    stopTimer;
    setTime(0);
  }
  return (
    <div>
      <h2>Stopwatch: {time} seconds</h2>
      <div className="btn-div">
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default App;
