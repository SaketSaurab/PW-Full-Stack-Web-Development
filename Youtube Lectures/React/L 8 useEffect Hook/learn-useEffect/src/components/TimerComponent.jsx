import React, { useEffect, useState } from "react";

function TimerComponent() {
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("setInterval executed");
      setSecond((prevSeconds) => prevSeconds + 1);
    }, 1000);
    return () => {
      console.log("Time to stop");
      clearInterval(intervalId);
    };
  }, []);

  return <div>Seconds: {second}</div>;
}

export default TimerComponent;
