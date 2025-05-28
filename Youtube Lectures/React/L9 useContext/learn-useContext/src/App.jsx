import { createContext, useState } from "react";
import "./App.css";
import ChildA from "./components/ChildA";

// step 1 : context created
const UserContext = createContext();

// step 2: wrap all the child components inside a provider
// step 3: pass the value
// step 4: consumer ke andar jaa kar consume kar lo

function App() {
  const [user, setUser] = useState({ name: "Love" });
  return (
    <div>
      <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider>
    </div>
  );
}

export default App;
export { UserContext };
