import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function handleClick(){
alert("I am clicked");
  }
 

  return (
    <div >
      <button onClick={handleClick} >Click me</button>
    </div>
  )
}

export default App
