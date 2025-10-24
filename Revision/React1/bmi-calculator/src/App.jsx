import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [heigh, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    if (weight == "" || heigh == "") {
      setStatus("Enter the weight and height");
      setBmi(null);
      return;
    }
    const heighInMeter = heigh / 100;
    const bmiValue = weight / (heighInMeter * heighInMeter);
    setBmi(bmiValue.toFixed(2));
    if (bmiValue < 18.5) {
      setStatus("Underweight");
    } else if (bmiValue < 25) {
      setStatus("Normal Weight");
    } else if (bmiValue < 30) {
      setStatus("Overweight");
    } else {
      setStatus("Obese");
    }
  };
  return (
    <>
      <div className="container-div">
        <div className="bmi-div">
          <div className="title">BMI Calculator</div>
          <br />
          <br />
          <div className="input-box">
            <input
              placeholder="Enter weight in KG"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <br />
            <br />
            <input
              placeholder="Enter heigh in CM"
              type="number"
              value={heigh}
              onChange={(e) => setHeight(e.target.value)}
            />{" "}
            <br />
            <br />
            <button onClick={calculateBMI}>Calculate BMI</button>
          </div>
          <br />
          <br />
          <div className="status-div">
            BMI: {bmi}
            <br />
            Status: {status}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
