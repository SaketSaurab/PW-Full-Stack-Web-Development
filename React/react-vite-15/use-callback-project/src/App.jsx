
import { useState } from 'react'
import './App.css'
import ChildComponents from './Components/ChildComponents';

function App() {
const[count,setCount]=useState(0);
function handleClick(){
  setCount(count+1);
}
  return (
   <div>
    <div>
      Count : {count}
    </div>
    <br/>
    <div>
      <button onClick={handleClick}>
        Increment
      </button>
    </div>
    <br/>
    <div>
      <ChildComponents buttonName='click me'/>
    </div>
   </div>
  )
}

export default App
