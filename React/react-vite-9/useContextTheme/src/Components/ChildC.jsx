import React from 'react'
import { UserContext } from '../App'
import { useContext } from 'react'
const ChildC = () => {
    const user=useContext(UserContext);
  return (

    <div>
      hello ji {user.name}
    </div>
  )
}

export default ChildC
