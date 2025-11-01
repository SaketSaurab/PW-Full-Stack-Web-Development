import { useState } from "react";
import "./App.css";

function App() {
  const [fuel1, setFuel1] = useState("Petrol");
  const [fuel2, setFuel2] = useState("CNG");
  const fuelOptions = ["Petrol", "Diesel", "CNG", "EV"];
  return (
    <>
      <div className="container-div">
        <div className="card">
          <div className="title-div">Car fuel Payback calculator</div>
          <div className="input-div">
            <div className="input-group">
              <label>Current fuel type</label>
              <select
                name="fuel-1"
                value={fuel1}
                onChange={(e) => {
                  setFuel1(e.target.value);
                  setFuel2("");
                }}
              >
                {fuelOptions.map((fuel) => (
                  <option key={fuel} value={fuel}>
                    {fuel.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
            <div className="input-group">
              <label>campare with</label>
              <select
                name="fuel-2"
                value={fuel2}
                onChange={(e) => setFuel2(e.target.value)}
              >
                {fuelOptions
                  .filter((fuel) => fuel !== fuel1)
                  .map((fuel) => (
                    <option key={fuel} value={fuel}>
                      {fuel.toUpperCase()}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
