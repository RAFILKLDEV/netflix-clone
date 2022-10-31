import React from "react";
import "./User.css"

const User = (props) => {
  return (
    <div className="User">
      <img src={props.img} alt={props.user} />
      <div>{props.user}</div>
    </div>
  );
};

export default User;
