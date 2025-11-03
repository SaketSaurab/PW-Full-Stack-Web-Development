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
  const [monthlyRun, setMonthlyRun] = useState(null);

  // output state

  const [vehicle1MonthlyCost, setVehicle1MonthlyCost] = useState(0);
  const [vehicle2MonthlyCost, setVehicle2MonthlyCost] = useState(0);
  // const [monthlyCostDifference, setMonthlyCostDifference] = useState(0);
  const [monthsRequireToCoverExtraMoney, setMonthsRequireToCoverExtraMoney] =
    useState(0);

  const calculatePayback = () => {
    const vehicle1MonthlyCost = (monthlyRun / milage1) * fuel1Cost;
    const vehicle2MonthlyCost = (monthlyRun / milage2) * fuel2Cost;

    const monthlyCostDifference = Math.abs(
      vehicle1MonthlyCost - vehicle2MonthlyCost,
    );
    const vehicleCostDifference = vehicleCost1 - vehicleCost2;
    const monthsRequireToCoverExtraMoney =
      vehicleCostDifference / monthlyCostDifference;

    setVehicle1MonthlyCost(vehicle1MonthlyCost);
    setVehicle2MonthlyCost(vehicle2MonthlyCost);
    setMonthsRequireToCoverExtraMoney(monthsRequireToCoverExtraMoney);
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
                onChange={(e) => setVehicleCost1(Number(e.target.value))}
              ></input>
              <input
                type="number"
                value={fuel1Cost}
                placeholder="fuel cost"
                onChange={(e) => setFuel1Cost(Number(e.target.value))}
              ></input>
              <input
                type="number"
                value={milage1}
                placeholder="mileage"
                onChange={(e) => setMilage1(Number(e.target.value))}
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
                onChange={(e) => setVehicleCost2(Number(e.target.value))}
              ></input>
              <input
                type="number"
                value={fuel2Cost}
                placeholder="fuel cost"
                onChange={(e) => setFuel2Cost(Number(e.target.value))}
              ></input>
              <input
                type="number"
                value={milage2}
                placeholder="mileage"
                onChange={(e) => setMilage2(Number(e.target.value))}
              ></input>
            </div>
          </div>
          <div>
            <input
              className="monthlyrun-input"
              value={monthlyRun}
              placeholder="monthly run in KM"
              onChange={(e) => setMonthlyRun(Number(e.target.value))}
            ></input>
            <button className="calculate-btn" onClick={calculatePayback}>
              Calculate
            </button>
          </div>
          <div className="output-div">
            <div>
              Monthly running cost of vehicle 1 is{" "}
              {vehicle1MonthlyCost.toFixed(0)}
            </div>
            <div>
              Monthly running cost of vehicle 2 is{" "}
              {vehicle2MonthlyCost.toFixed(0)}
            </div>
            <div>
              Time require to recover the extra money :
              {monthsRequireToCoverExtraMoney.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
