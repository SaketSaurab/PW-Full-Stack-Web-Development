import { createContext } from "react";
import "./App.css";
import ChildA from "./Components/ChildA";
import { useState } from "react";
// import { useContext } from 'react';

// step 1 : create context
// const UserContext=createContext();

// step 2: wrap all the child inside the provider
// step 3: pass the value
// step 4: consumer ke andar ja kar consume kar lo

const ThemeContext = createContext();

function App() {
  // const [user,setUser]=useState({name:"Love"});

  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
    <div id='container' style={{backgroundColor:theme==='light'?"beige":"black"}}>
        <ChildA />
    </div>
    </ThemeContext.Provider>

    // <div>

    // <UserContext.Provider value={user}>
    // <ChildA/>
    // </UserContext.Provider>

    // </div>
  );
}

export default App;
// export {UserContext}
export { ThemeContext };
