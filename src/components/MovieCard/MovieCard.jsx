import React from "react";
import "./MovieCard.css";

const MovieCard = (props) => {
  return (
    <div className="MovieCard">
      <img src={props.img} alt={props.title} />
    </div>
  );
};

export default MovieCard;
