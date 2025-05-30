import { useState } from "react";
import "./App.css";
import Logout from "./components/Logout";
import Login from "./components/Login";

function App() {
  const [isLogin, setIsLogin] = useState(false);

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

  // return <div>{isLogin ? <Logout /> : <Login />}</div>;

  {
    /*using logical operator */
  }

  // return (
  //   <div>
  //     <h2>Welcome to the page</h2>
  //     <div>{isLogin && <Logout />}</div>
  //   </div>
  // );

  {
    /*using early return */
  }

  if (isLogin) {
    return <Logout />;
  }

  return (
    <div>
      <h2>Welcome to the page</h2>
      <div>{isLogin && <Logout />}</div>
    </div>
  );
}

export default App;
