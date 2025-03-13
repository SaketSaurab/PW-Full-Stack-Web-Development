
import { useState } from 'react'
import './App.css'
import Card from './assets/Components/Card'
import Button from './assets/Components/Button';

function App() {

  const [count,setCount]=useState(0);
  function hadleClick(){
    setCount(count+1);
  }

  return (
    <div>
  <Button handleClick={hadleClick} text="Click me">
<h1>{count}</h1>
</Button>

     {/* <Card name="Love babbar">
      <h1>Best Web Dev</h1>
      <p>Trying to be consistance</p>
      <p>Will complete the course soon</p>

     </Card>
     <Card children="mai bhi children hu">

     </Card> */}
      
    </div>
  )
}

export default App
