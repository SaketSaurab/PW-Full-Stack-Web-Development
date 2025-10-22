import { useState } from "react";
import "./App.css";

function App() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit(value === "" ? "" : (value * 9) / 5 + 32);
  };
  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius(value === "" ? "" : ((value - 32) * 5) / 9);
  };

  return (
    <>
      <div className="container-div">
        <input
          type="number"
          placeholder="Celsius"
          value={celsius}
          onChange={handleCelsiusChange}
        />

        <input
          type="number"
          placeholder="Fahrenheit"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
        />
      </div>
    </>
  );
}

export default App;
