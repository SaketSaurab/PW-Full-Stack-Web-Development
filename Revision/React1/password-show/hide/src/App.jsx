import { useState } from "react";
import "./App.css";
import "./Components/PasswordToggle";
import PasswordToggle from "./Components/PasswordToggle";

function App() {
  return (
    <>
      <div className="container-div">
        <PasswordToggle />
      </div>
    </>
  );
}

export default App;
