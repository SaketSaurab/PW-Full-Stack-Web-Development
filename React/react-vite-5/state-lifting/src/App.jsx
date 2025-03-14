
import { useState } from 'react'
import './App.css'
import Card from './assets/Components/Card'

function App() {
  
  const [name,setName]=useState('');

  return (
    <div>
    <Card title="Card 1" name={name} setName={setName}/>
    <Card title ="Card 2" name={name} setName={setName}/>
    {/* <p>i am inside parent : {name}</p> */}
    </div>
  )
}

export default App
