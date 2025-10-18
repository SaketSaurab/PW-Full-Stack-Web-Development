import { useState } from "react";
import "./App.css";

function App() {
  const [dob, setDob] = useState("");
  const [daysLeft, setDaysleft] = useState(null);

  const calculateBirthdayCountdown = () => {
    if (!dob) return;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const birthdate = new Date(dob);
    let nextBirthday = new Date(
      today.getFullYear(),
      birthdate.getMonth(),
      birthdate.getDate()
    );
    nextBirthday.setHours(0, 0, 0, 0);
    if (nextBirthday < today) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const diffTime = nextBirthday - today;
    const diffDate = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysleft(diffDate);
  };

  return (
    <>
      <div className="div-container">
        <div>Birthday Countdown</div>
        <div>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <button onClick={calculateBirthdayCountdown}>
            Calculate Days left
          </button>
        </div>
        <div>
          {daysLeft !== null && (
            <div className="div-result">
              {" "}
              {daysLeft === 0
                ? "Happy Birthday"
                : `Only ${daysLeft} days left until your next Birthday`}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
