
import { useState } from 'react'
import './App.css'
import ButtonLogOut from './Components/ButtonLogOut';
import ButtonLogIn from './Components/ButtonLogIn';

function App(){
  const[isLoggedIn,setLoggedIn]=useState(true);
 



  // using early return

if(!isLoggedIn){
  return(
    <ButtonLogOut/>
  )
}
 
// using logical operator
return(
  <div>
    <h1>Welcome to react learning</h1>
    {isLoggedIn && <ButtonLogOut/>}
  </div>
)

 
// using ternary operator
// return(
//   <div>
//     {isLoggedIn?<ButtonLogOut/>:<ButtonLogIn/>}
//   </div>
// )

 
 // if else
//   if(isLoggedIn){
//     return(
//       <ButtonLogOut/>
//     )
//   }
//   else{
//     return(
//       <ButtonLogIn/>
//     )
//   }
}

export default App
