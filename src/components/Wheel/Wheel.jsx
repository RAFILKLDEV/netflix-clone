import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const Wheel = (props) => {
    console.log(props?.movies)
  return (
    <div className="MoviesPage-Movies">
      <h1>Because You Watched Batman</h1>
      <div className="MoviesPage-Movies-Bar">
        {props.movies.map((e) => (
          <MovieCard img={e.backdropURLs[300]} title={e.title} />
        ))}
      </div>
    </div>
  );
};

export default Wheel;
