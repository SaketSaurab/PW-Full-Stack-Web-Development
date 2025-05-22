import { useState } from "react";
import "./App.css";
import Logout from "./components/Logout";
import Login from "./components/Login";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  {
    /*using if else method */
  }
  // if (isLogin) {
  //   return <Logout />;
  // } else {
  //   return <Login />;
  // }

  {
    /*using ternary operator */
  }

  return <div>{isLogin ? <Logout /> : <Login />}</div>;
}

export default App;
