import React, { useMemo } from "react";

const ChildComponent = useMemo((props) => {
  console.log("Child component got re-rendered");
  return (
    <div>
      <button>{props.buttonName}</button>
    </div>
  );
});

export default ChildComponent;
