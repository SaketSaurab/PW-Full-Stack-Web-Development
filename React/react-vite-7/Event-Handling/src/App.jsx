import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function handleClick(){
alert("I am clicked");
  }
 function paraMouse(){
  alert("Para ke upar mouse leke aaye ho ");
 }
function inputChange(e){
console.log("Input change hua hai ",e.target.value);
  console.log("Input me value change hua hai");
}
  return (
    <div >
    <input type='text' onChange={inputChange}/>
      <button onClick={handleClick} >Click me</button>
      {/* <p onMouseOver={paraMouse}>para hai ye </p> */}
    </div>
  )
}

export default App
