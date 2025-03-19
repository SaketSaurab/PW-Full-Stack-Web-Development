
import { createContext } from 'react'
import './App.css'
import ChildA from './Components/ChildA';
import { useState } from 'react';
import { useContext } from 'react';

// step 1 : create context
const UserContext=createContext();

// step 2: wrap all the child inside the provider
// step 3: pass the value
// step 4: consumer ke andar ja kar consume kar lo

function App() {
const [user,setUser]=useState({name:"Love"});
  return (
    <div>
    <UserContext.Provider value={user}>
    <ChildA/>
    </UserContext.Provider>

    </div>
  )
}

export default App
export {UserContext}
