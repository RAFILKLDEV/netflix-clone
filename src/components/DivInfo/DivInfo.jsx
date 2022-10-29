import React from "react";

const DivInfo = (props) => {
  return (
    <div className="Content">
      <div>
        <h1>{props.title}</h1>
        <h2>{props.subTitle}</h2>
      </div>
      <img src={props.img} alt={props.title} />
    </div>
  );
};

export default DivInfo;
