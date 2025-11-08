import { useState } from "react";
import "./App.css";

/*  logic to calculate 
Petrol : 
Price :9 L
Mileage:18 km/lit
Petrol price : 95/liter
Monthly expense on fuel 1 : [((monthly run)/milage)*price]

CNG
Price :10L
Mileage:25 km/kg
Cng price;85/kg 
Monthly expense on fuel 2 : [((monthly run)/milage)*price]

Monthly run : 500km


Months require to recover extra money: extra price/(|fuel 1 expense -fuel 2 expense|)


*/

function App() {
  const [fuel1, setFuel1] = useState("Petrol");
  const [fuel2, setFuel2] = useState("CNG");
  const fuelOptions = ["Petrol", "Diesel", "CNG", "EV"];

  //vehicle 1 state

  const [vehicleCost1, setVehicleCost1] = useState("");
  const [fuel1Cost, setFuel1Cost] = useState("");
  const [milage1, setMilage1] = useState("");

  // vehicle 2 state

  const [vehicleCost2, setVehicleCost2] = useState("");
  const [fuel2Cost, setFuel2Cost] = useState("");
  const [milage2, setMilage2] = useState("");

  //monthly run
  const [monthlyRun, setMonthlyRun] = useState("");

  // output state

  const [vehicle1MonthlyCost, setVehicle1MonthlyCost] = useState(null);
  const [vehicle2MonthlyCost, setVehicle2MonthlyCost] = useState(null);
  // const [monthlyCostDifference, setMonthlyCostDifference] = useState(0);
  const [paybackMonths, setPaybackMonths] = useState(null);

  const calculatePayback = () => {
    const v1cost = Number(vehicleCost1);
    const f1cost = Number(fuel1Cost);
    const m1 = Number(milage1);

    const v2cost = Number(vehicleCost2);
    const f2cost = Number(fuel2Cost);
    const m2 = Number(milage2);

    const run = Number(monthlyRun);

    // input validation

    if (!v1cost || !f1cost || !m1 || !v2cost || !f2cost || !m2 || !run) {
      alert("Please fill all input filled");
      return;
    }

    const vehicle1MonthlyCost = (run / m1) * f1cost;

    const vehicle2MonthlyCost = (run / m2) * f2cost;

    const monthlyCostDifference = Math.abs(
      vehicle1MonthlyCost - vehicle2MonthlyCost,
    );

    const vehicleCostDifference = Math.abs(v1cost - v2cost);
    if (vehicleCostDifference === 0) {
      alert(
        `There is no price  difference between the car so please choose ${vehicle1MonthlyCost > vehicle2MonthlyCost ? fuel2 + " Vehicle" : fuel1 + "Vehicle "}`,
      );
      return;
    }
    const paybackMonths = vehicleCostDifference / monthlyCostDifference;

    setVehicle1MonthlyCost(vehicle1MonthlyCost);
    setVehicle2MonthlyCost(vehicle2MonthlyCost);
    setPaybackMonths(paybackMonths);
  };

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
              <input
                type="number"
                value={vehicleCost1}
                placeholder="Car Price"
                onChange={(e) => setVehicleCost1(e.target.value)}
              ></input>
              <input
                type="number"
                value={fuel1Cost}
                placeholder="fuel cost"
                onChange={(e) => setFuel1Cost(e.target.value)}
              ></input>
              <input
                type="number"
                value={milage1}
                placeholder="mileage"
                onChange={(e) => setMilage1(e.target.value)}
              ></input>
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
              <input
                type="number"
                value={vehicleCost2}
                placeholder="Car Price"
                onChange={(e) => setVehicleCost2(e.target.value)}
              ></input>
              <input
                type="number"
                value={fuel2Cost}
                placeholder="fuel cost"
                onChange={(e) => setFuel2Cost(e.target.value)}
              ></input>
              <input
                type="number"
                value={milage2}
                placeholder="mileage"
                onChange={(e) => setMilage2(e.target.value)}
              ></input>
            </div>
          </div>
          <div>
            <input
              className="monthlyrun-input"
              value={monthlyRun}
              placeholder="monthly run in KM"
              onChange={(e) => setMonthlyRun(e.target.value)}
            ></input>
            <button className="calculate-btn" onClick={calculatePayback}>
              Calculate
            </button>
          </div>
          {vehicle1MonthlyCost !== null && (
            <div className="output-div">
              <div>
                Monthly running cost of <b>{fuel1} </b>vehicle is{" "}
                <b> {vehicle1MonthlyCost.toFixed(0)}</b>
              </div>
              <div>
                Monthly running cost of<b> {fuel2}</b> vehicle is{" "}
                <b> {vehicle2MonthlyCost.toFixed(0)}</b>
              </div>
              <div className="final-result">
                Time require to recover the extra money :
              </div>
              <div className="result-year">
                {(() => {
                  const years = Math.floor(paybackMonths / 12);
                  const remainingMonthsDecimal = paybackMonths % 12;
                  const months = Math.floor(remainingMonthsDecimal);
                  const days = Math.round(
                    (remainingMonthsDecimal - months) * 30,
                  );
                  return `${years} years ${months} months ${days} days`;
                })()}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
