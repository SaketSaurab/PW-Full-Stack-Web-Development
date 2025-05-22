import { useState } from "react";
import "./App.css";
import Logout from "./components/Logout";
import Login from "./components/Login";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  if (isLogin) {
    return <Logout />;
  } else {
    return <Login />;
  }
}

export default App;
