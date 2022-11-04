import React, { useRef } from "react";
import MovieCard from "../MovieCard/MovieCard";

const Wheel = (props) => {
  const position = useRef();
  const random = Math.floor(Math.random() * (1 - 5) + 5);

  const wheelHorizontal = (e) => {
    const race = 620;
    if (e.deltaY > 0) {
      // Scroll right
      position.current.scrollLeft += race;
    }
    // Scroll left
    else position.current.scrollLeft -= race;
  };

  return (
    <div onWheel={wheelHorizontal} className="MoviesPage-Movies">
      <h1>Because You Watched {props.movies[random].title}</h1>
      <div ref={position} className="MoviesPage-Movies-Bar">
        {props.movies.map((e, i) => (
          <MovieCard key={i} img={e.backdropURLs[300]} title={e.title} />
        ))}
      </div>
    </div>
  );
};

export default Wheel;
