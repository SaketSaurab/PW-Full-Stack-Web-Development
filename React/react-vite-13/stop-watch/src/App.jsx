
import { useState } from 'react'
import './App.css'

function App() {
  const[time,setTime]=useState(0);
  function startTimer(){

  }
  function stopTimer(){

  }
  function resetTimer(){

  }


  return (
   <div>
   <h1>Stop Watch : {time} seconds</h1>
   <button onClick={startTimer}>
Start Timer
   </button>
   <br/><br/>
   <button onClick={stopTimer}>
    Stop Timer
   </button>
   <br/><br/>
   <button onClick={resetTimer}>
    Reset Timer
   </button>
   </div>
  )
}

export default App
