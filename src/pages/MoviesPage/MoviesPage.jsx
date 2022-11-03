import axios from "axios";
import React, { useEffect, useState } from "react";
import CloneFlixLogo from "../../components/CloneFlixLogo/CloneFlixLogo";
import MovieCard from "../../components/MovieCard/MovieCard";
import Wheel from "../../components/Wheel/Wheel";
import { batman, pokemon, shrek } from "../../constants";
import "./MoviesPage.css";

const MoviesPage = () => {
  const options = {
    method: "GET",
    url: "https://streaming-availability.p.rapidapi.com/v2/search/title",
    params: {
      title: "batman",
      country: "us",
      type: "movie",
      output_language: "en",
    },
    headers: {
      "X-RapidAPI-Key": "32f916b26emsh02471d2aab51a5dp15ed1ajsnceac7eb3250c",
      "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
    },
  };

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .request(options)
      .then(async function (response) {
        console.log(response.data.result);
        await setMovies(response.data.result);
      })
      .catch(async function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="MoviesPage">
      <div className="MoviesPage-Header">
        <div className="MoviesPage-Menu">
          <CloneFlixLogo className="MoviesPage-Logo" />
          <div>Home</div>
          <div>Tv Shows</div>
          <div>Movies</div>
          <div>New & Popular</div>
          <div>MY list</div>
        </div>
        <div className="MoviesPage-Bar">
          <div className="MoviesPage-Search">Pesquisa</div>
          <div className="MoviesPage-User">User</div>
          <div className="MoviesPage-Notification">Notificação</div>
          <div className="MoviesPage-UserIcon">User</div>
        </div>
      </div>
      <div className="MoviesPage-MovieBox">
        <img src={batman.result[1]?.backdropURLs.original} alt="" id="img" />
        <div className="MoviesPage-Movie">
          <div className="MoviesPage-MovieContent">
            <h1>{batman.result[1]?.title}</h1>
            <div className="MoviesPage-MovieContent-Desc">
              {batman.result[1]?.overview}
            </div>
            <div className="MoviesPage-Buttons">
              <button>Play</button>
              <button>More Info</button>
            </div>
          </div>
          <Wheel movies={batman.result} />
          <Wheel movies={pokemon.result} />
          <Wheel movies={shrek.result} />
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;
