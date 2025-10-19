import { useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <div className={`container-div app ${theme}`}>
        <div>Theme Switcher</div>
        <button className={`${theme} `} onClick={changeTheme}>
          Switch to {theme === "light" ? "dark" : "light"} mode
        </button>
        <div> </div>
      </div>
    </>
  );
}

export default App;
