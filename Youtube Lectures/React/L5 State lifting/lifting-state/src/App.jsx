import "./App.css";
import Card from "./components/Card";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <Card title={1} name={name} setName={setName} />

      <Card title={2} name={name} setName={setName} />
      <p>i am inside parent: {name}</p>
    </div>
  );
}

export default App;
