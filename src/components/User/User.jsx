import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import "./User.css";

const User = (props) => {
  const { userState, setUserState } = useContext(UserContext);
  const handleUser = () => {
    setUserState(() => {
      localStorage.setItem("user", props.user);
      localStorage.setItem("img", props.img);
      const values = userState;
      values.user = props.user;
      values.img = props.img;
      return values;
    });
  };

  return (
    <NavLink to={"/watch"} onClick={handleUser}>
      <div className="User">
        <img src={props.img} alt={props.user} />
        <div>{props.user}</div>
      </div>
    </NavLink>
  );
};

export default User;
