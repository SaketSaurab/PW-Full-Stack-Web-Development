import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function handleClick() {
    alert("I am clicked");
  }

  function paraMouse() {
    alert("Para ke upar mouse leke aaye ho");
  }

  function inputChange(e) {
    console.log("Input change hua hai ", e.target.value);
    console.log("Input me value change hua hai");
  }

  function handleSubmit(e) {
    e.preventDefault();
    // i am writting my custom behaviour down
    alert("Form submit kar du kya");
  }

  return (
    <div>
      <button onClick={() => alert("Button click hua hai")}>click me here</button>

      <form onSubmit={handleSubmit}>
        <input type='text' onChange={inputChange} />
        <button onClick={handleClick}>Click me</button>
        <button type='submit'>Submit</button>
        <p onMouseOver={paraMouse}>para hai ye</p>
      </form>
    </div>
  );
}

export default App;
