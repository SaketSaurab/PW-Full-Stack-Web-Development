import React from "react";
import "./UserCard.css";

const UserCard = (props) => {
  return (
    <div className="container-div">
      <h2 className="user-name">{props.name}</h2>
      <img className="user-image" alt={props.name} src={props.image} />
      <p className="user-description">{props.description}</p>
    </div>
  );
};

export default UserCard;
