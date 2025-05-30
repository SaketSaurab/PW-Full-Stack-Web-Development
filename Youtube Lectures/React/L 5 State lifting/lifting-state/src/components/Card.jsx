import React from "react";

const Card = ({ title, name, setName }) => {
  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <p>
        Name state value inside child card {title}: {name}
      </p>
    </div>
  );
};

export default Card;
