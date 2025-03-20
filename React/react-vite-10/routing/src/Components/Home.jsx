import React from 'react'
import { useNavigate } from 'react-router-dom'

const home = () => {
  const navigate=useNavigate();
  function handleClick(){
    navigate('/About');
  }
  return (
    <div>
      Home Page
      <button onClick={handleClick}>Move to about</button>
    </div>
  )
}

export default home
