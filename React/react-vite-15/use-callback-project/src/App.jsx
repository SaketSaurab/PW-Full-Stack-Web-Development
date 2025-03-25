import { useCallback, useState } from "react";
import "./App.css";
import ChildComponents from "./Components/ChildComponents";
import ExpensiveComponents from "./Components/ExpensiveComponents";

function App() {
  // const[count,setCount]=useState(0);

  // const handleClick=useCallback(()=>{
  //   setCount(count+1)
  // },[]);

  return (
    <div>
      <ExpensiveComponents />
    </div>

    //  <div>
    //   <div>
    //     Count : {count}
    //   </div>
    //   <br/>
    //   <div>
    //     <button onClick={handleClick}>
    //       Increment
    //     </button>
    //   </div>
    //   <br/>
    //   <div>
    //     <ChildComponents buttonName='click me' handleClick={handleClick}/>
    //   </div>
    //  </div>
  );
}

export default App;
