import { useState } from "react";
import "./App.css";

function App() {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!dob) return;

    const today = new Date();
    const birthDate = new Date(dob);

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      const previousMonthDays = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      ).getDate();
      days += previousMonthDays;
    }

    if (months < 0) {
      years--;
      months += 12;
    }
    setAge({ years, months, days });
  };
  return (
    <>
      <div className="div-container">
        <div>Calculate Your Age</div>
        <div>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <button onClick={calculateAge}>Calculate Age</button>
        </div>
        <div></div>
        {age && (
          <div>
            You are {age.years} Years, {age.months} Months, {age.days} Days old
          </div>
        )}
      </div>
    </>
  );
}

export default App;
