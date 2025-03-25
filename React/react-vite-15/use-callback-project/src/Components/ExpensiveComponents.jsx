import React, { useState } from 'react'

const ExpensiveComponents = () => {
    const[count,setCount]=useState(0);
    const[text,setText]=useState("");

    const ExpensiveCalculation=()=>{
        console.log("Running expensive calculation..");
        let result=0;
        for(let i=0;i<1000000000;i++){
            result+=i;
        }
        return result;
    }



  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e)=>setText(e.target.value)}
        placeholder="Type something"
      />
      <p>
        Expensive Calculation result: {ExpensiveCalculation()}
      </p>
      <button onClick={()=>setCount(count+1)}>Increment Count</button>
    </div>
  );
};

export default ExpensiveComponents
