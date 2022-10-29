import React from "react";
import DivInfo from "../../components/DivInfo/DivInfo";
import "./IndexPage.css";

const IndexPage = () => {
  return (
    <div className="IndexPage">
      <div className="IndexPage-Bg">
        <div className="IndexPage-Header">
          <h1>CloneFlix</h1>
          <div className="IndexPage-Header-Menu">
            <h2>Idioma</h2>
            <h2>Entrar</h2>
          </div>
        </div>
        <div className="IndexPage-Content">
          <h1>Filmes, séries e muito mais. Sem limites.</h1>
          <h2>Assista onde quiser. Cancele quando quiser.</h2>
          <h3>
            Pronto para assistir? Informe seu email para criar ou reiniciar sua
            assinatura.
          </h3>
          <div className="IndexPage-Content-Input">
            <input placeholder="email"></input>
            <button>Vamos la!</button>
          </div>
        </div>
      </div>
      <DivInfo
        title="Aproveite na TV."
        subTitle="Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos."
        img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
      />
      <DivInfo
        title="Baixe séries para assistir offline."
        subTitle="Salve seus títulos favoritos e sempre tenha algo para assistir."
        img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
      />
      <DivInfo
        title="Assista quando quiser."
        subTitle="Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso."
        img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
      />
      <DivInfo
        title="Crie perfis para crianças."
        subTitle="Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso."
        img="https://occ-0-4224-185.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABWGB3YOpSh2wA7OOZQYD-MkalQ0oJEy-YEEpoPKAIenLtZf5lKeERDdKj-u6WnZx9wx_QuiDVHkGM_1QmVQt9yxM7mKjevBNHKFz.png?r=1b8"
      />
    </div>
  );
};

export default IndexPage;
