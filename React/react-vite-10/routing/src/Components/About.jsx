import React from 'react'
import { useNavigate } from 'react-router-dom'

const about = () => {
  const navigate=useNavigate();
  function handleClick(){
    navigate('/Dashboard');
  }
  return (
    <div>
      About Page
      <button onClick={handleClick}>Move to Dashboard</button>
    </div>
  )
}

export default about
