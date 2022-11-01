import React from "react";
import CloneFlixLogo from "../../components/CloneFlixLogo/CloneFlixLogo";
import "./MoviesPage.css";

const MoviesPage = () => {
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
      <div className="MoviesPage-Movie">
        <div className="MoviesPage-Content">
          <img
            src="https://conteudo.imguol.com.br/c/entretenimento/d6/2017/07/18/transformers-1500405719738_v2_4x3.jpg"
            alt=""
          />
          <div className="MoviesPage-MovieContent2">
            <h1>Title</h1>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <div className="MoviesPage-Buttons">
              <button>Play</button>
              <button>More Info</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;
