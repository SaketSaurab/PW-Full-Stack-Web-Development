import React from "react";

const ChildComponent = (props) => {
  console.log("Child component got re-rendered");
  return (
    <div>
      <button>{props.buttonName}</button>
    </div>
  );
};

export default ChildComponent;
