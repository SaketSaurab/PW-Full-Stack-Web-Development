
import './App.css'
import { useEffect , useState} from 'react'
function App() {
 const [count,setCount]=useState(0);
const [total,setTotal]=useState(1);
// first -> side effect function
// second-> clean up function
// third -> comma seprated  dep list

// variation 1 : 
// runs on every render
// useEffect(()=>{
  //  alert("I will render on each render")})
//--------------------------------


  // variation 2 
  // that runs only on first render 
  // 


// useEffect(() => {
//  alert("I will run only on first render");
// }, [])
//------------------------------------
// variation 3: 

// useEffect(() => {
// alert("I will run each time when count is updated");
// }, [count]);
//-------------------

// variation 4
// multiple dependencies


// useEffect(() => {
// alert("I will run every time when count or total is updated");
// }, [count,total]);
//------------------


// variation 5 
/// is baar lets add cleanup function
// useEffect(() => {
//   alert("The count is updated")

//   return () => {
//     alert("The count is unmounted from ui");
//   }
// }, [count]);
 //--------------



function handleClick(){
  setCount(count+1);
}

function handleClickTotal(){
  
  setTotal(total+1);
}

  return (
    <div>
    <p><b>Hello JI</b></p>
    <button onClick={handleClick}>click here</button>
    <br/>
     Count is : {count}
     <br/>
       <button onClick={handleClickTotal}> Total</button>
    <br/>
     Total is : {total}
    </div>
  )
}

export default App
