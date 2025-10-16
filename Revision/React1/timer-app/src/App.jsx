import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const getTime = () => {
    new Date().toLocaleTimeString("en-ind", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });
  };

  const [currentTime, setCurrentTime] = useState(getTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="div-container">
        <div>Hello Clock</div>
        <div>{currentTime}</div>
      </div>
    </>
  );
}

export default App;
