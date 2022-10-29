import React from "react";
import "./DivInfo.css"

const DivInfo = (props) => {
  return (
    <div className="DivInfo-Content">
      <div className="DivInfo-Title">
        <h1>{props.title}</h1>
        <h2>{props.subTitle}</h2>
      </div>
      <img src={props.img} alt={props.title} />
    </div>
  );
};

export default DivInfo;
