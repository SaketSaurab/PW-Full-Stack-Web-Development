import React from 'react'
import "./UserCard.css"
const UserCard = (props) => {
  return (
    <div className='user-container'>
    <p id='user-name'> {props.name}</p>
    <img id ='user-img'src='https://imgs.search.brave.com/UT9DTxBrnGs71p_Nky5fRUq54iiahVWXgexhno5L0yo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9ncmFw/aC5mYWNlYm9vay5j/b20vMTUyOTMzMTcy/Mzg0MTIzMC9waWN0/dXJlP3R5cGU9bGFy/Z2U.jpeg' alt='love'></img>
    <p id='user-desc'>Description of Love Babbar</p>
      
    </div>
  )
}

export default UserCard
