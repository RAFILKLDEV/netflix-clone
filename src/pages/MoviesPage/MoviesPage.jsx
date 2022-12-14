import React, { useContext, useEffect, useState } from "react";
import CloneFlixLogo from "../../components/CloneFlixLogo/CloneFlixLogo";
import Wheel from "../../components/Wheel/Wheel";
import { batman, pokemon, shrek } from "../../constants";
import UserContext from "../../contexts/UserContext";
import "./MoviesPage.css";

const MoviesPage = () => {
  const { userState, setUserState } = useContext(UserContext);
  
  setUserState(() => {
    const values = userState;
    values.user = localStorage.getItem("user");
    values.img = localStorage.getItem("img");
    return values;
  });

  return (
    <div className="MoviesPage">
      {}
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
          <div className="MoviesPage-User">{userState.user}</div>
          <div className="MoviesPage-Notification">Notificação</div>
          <div className="MoviesPage-UserIcon">
            <img src={userState.img} alt={userState.user} />
          </div>
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
